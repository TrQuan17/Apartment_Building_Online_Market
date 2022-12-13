import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DescriptionCreate from './DescriptionCreate'
import { useGetCategories, useGetSubsByCategory } from 'features/Admin/Category'
import { Controller, useForm, useFormState } from 'react-hook-form'
import {
	Box,
	Button,
	Chip,
	CircularProgress,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	Typography,
} from '@material-ui/core'
import { BasicInput } from 'components/Input/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import { Form } from 'components/Form/Form'
import { Autocomplete } from '@material-ui/lab'
import SimpleBackdrop from 'components/Backdrop/Backdrop'
import { DropzoneArea } from 'material-ui-dropzone'
import {
	categoryId,
	colorOptions,
	laptopCpu,
	laptopRam,
	laptopRes,
	laptopRom,
	laptopSc,
	phoneRam,
	phoneRom,
	phoneSc,
	phoneType,
	smWatchFace,
	smWatchPin,
	smWatchSc,
	tabletRam,
	tabletRom,
	tabletSc,
	watchSc,
	watchSex,
} from 'staticOptions'
import { useSnackbar } from 'notistack'
import { useQueryClient } from 'react-query'
import adminAPI from 'apis/adminAPI'
import { pathToUrl } from 'utils/router'
import { adminRoutes } from 'routes'
import './form.css'

const schema = yup.object().shape({
	name: yup.string().required('Vui lòng nhập tên sản phẩm'),
	price: yup.number().required('Vui lòng nhập giá sản phẩm').min(0, 'Giá nhỏ nhất').max(99999999),
	priceCompare: yup
		.number()
		.required('Vui lòng nhập giá chưa giảm')
		.min(0, 'Giá chưa giảm nhỏ nhất')
		.max(99999999),
	shipping: yup.string().required('Vui lòng chọn giao hàng'),
	quantity: yup.number().required('Vui lòng nhập số lượng').min(0, 'Số lượng nhỏ nhất').max(999),
})

const queryGetProductsKey = [
	pathToUrl(adminRoutes.adminProduct),
	{
		limit: 20,
		page: 0,
		sort: '-_id',
	},
]

const defaultValues = {
	name: '',
	price: '',
	priceCompare: '',
	shipping: 'Có',
	quantity: '',
	type: '',
	category: undefined,
	subs: undefined,
	ram: undefined,
	rom: undefined,
	sc: '',
	res: '',
	cpu: '',
	face: '',
	pin: '',
	sex: undefined,
	color: undefined,
}

function BoxSection({ title, children }) {
	return (
		<Paper
			style={{
				margin: '16px auto',
				padding: 16,
			}}
		>
			<Grid container item spacing={2}>
				<Grid item xs={12} md={4}>
					<Typography variant="h6">{title}</Typography>
				</Grid>
				<Grid item xs={12} md={8}>
					{children}
				</Grid>
			</Grid>
		</Paper>
	)
}

const FILES_LIMIT = 15

const FormProductCreate = ({ id }) => {
	const queryClient = useQueryClient()
	const history = useHistory()
	const { enqueueSnackbar } = useSnackbar()
	const [body, setBody] = useState('')
	const [category, setCategory] = useState(null)
	const [subOptions, setSubOptions] = useState([])
	const [showSub, setShowSub] = useState(false)
	const [fileListImage, setFileListImage] = useState([])
	const [loadingCreate, setLoadingCreate] = useState(false)

	const { isLoading, data, error } = useGetCategories()
	const { isLoading: isLoadingSubs, data: categorySubs } = useGetSubsByCategory(
		category ? category._id : null
	)

	const {
		handleSubmit,
		reset,
		control,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(schema),
	})
	const { isSubmitting } = useFormState({ control })

	const handleChangeCategory = async (field, data) => {
		field.onChange(data._id)
		if (data) {
			setCategory(data)
		}
	}

	useEffect(() => {
		if (categorySubs) {
			setSubOptions(categorySubs)
			setShowSub(true)
		}
	}, [categorySubs])

	const onSubmit = async (values) => {
		const formData = new FormData()
		try {
			setLoadingCreate(true)
			const newProduct = {
				...values,
				description: body,
			}
			formData.append('product', JSON.stringify(newProduct))
			for (let index = 0; index < fileListImage.length; index++) {
				formData.append('image', fileListImage[index])
			}
			const response = await adminAPI.createProduct(formData)
			if (response) {
				setLoadingCreate(false)
				setFileListImage([])
				await queryClient.refetchQueries(queryGetProductsKey, { active: true, exact: true })
				history.push('/admin/product')
			}
		} catch (e) {
			setLoadingCreate(false)
			enqueueSnackbar('Tạo mới thất bại', { variant: 'error' })
		}
	}

	if (isLoading) return <SimpleBackdrop />

	if (error) return 'Error: ' + error.message

	return (
		<>
			{loadingCreate && <SimpleBackdrop />}
			<Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
				<BoxSection title="Thông tin cơ bản">
					<Controller
						control={control}
						name="name"
						render={({ field }) => (
							<BasicInput
								{...field}
								placeholder="Tên sản phẩm"
								error={!!errors.name?.message}
								helperText={errors.name?.message}
							/>
						)}
					/>
					<DescriptionCreate body={body} handleChangeQuill={(e) => setBody(e)} />
				</BoxSection>
				<BoxSection title="Hình ảnh">
					<DropzoneArea
						acceptedFiles={['image/*']}
						dropzoneText={'Tải ảnh lên'}
						onChange={(files) => setFileListImage(files)}
						filesLimit={FILES_LIMIT}
						maxFileSize={2000000}
					/>
				</BoxSection>
				<BoxSection title="Giá">
					<Controller
						control={control}
						name="price"
						render={({ field }) => (
							<BasicInput
								{...field}
								type="number"
								placeholder="Giá sản phẩm"
								error={!!errors.price?.message}
								helperText={errors.price?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name="priceCompare"
						render={({ field }) => (
							<BasicInput
								{...field}
								type="number"
								placeholder="Giá chưa giảm"
								error={!!errors.priceCompare?.message}
								helperText={errors.priceCompare?.message}
							/>
						)}
					/>
				</BoxSection>
				<BoxSection title="Kho hàng">
					<Controller
						control={control}
						name="quantity"
						render={({ field }) => (
							<BasicInput
								{...field}
								type="number"
								label="Số lượng"
								error={!!errors.quantity?.message}
								helperText={errors.quantity?.message}
							/>
						)}
					/>
					<label>Giao hàng</label>
					<Controller
						control={control}
						name="shipping"
						render={({ field }) => (
							<RadioGroup row {...field}>
								<FormControlLabel value="Yes" control={<Radio color="primary" />} label="Có" />
								<FormControlLabel value="No" control={<Radio color="primary" />} label="Không" />
							</RadioGroup>
						)}
					/>
				</BoxSection>
				<BoxSection title="Danh mục">
					<Controller
						control={control}
						name="category"
						render={({ field }) => (
							<Autocomplete
								{...field}
								value={category}
								options={data}
								getOptionLabel={(c) => c.name}
								renderOption={(c) => <span>{c.name}</span>}
								renderInput={(params) => <BasicInput {...params} label="Danh mục" />}
								onChange={(_, data) => handleChangeCategory(field, data)}
							/>
						)}
					/>
					{isLoadingSubs && (
						<Box textAlign="center" margin="8px 0">
							<CircularProgress size={36} />
						</Box>
					)}
					{!isLoadingSubs && showSub && subOptions && (
						<Controller
							control={control}
							name="subs"
							render={({ field }) => (
								<Autocomplete
									{...field}
									value={defaultValues.subs}
									options={subOptions}
									getOptionLabel={(s) => s.name}
									renderOption={(s) => <span>{s.name}</span>}
									renderInput={(params) => <BasicInput {...params} label="Thương hiệu" />}
									onChange={(_, data) => field.onChange(data._id)}
								/>
							)}
						/>
					)}
				</BoxSection>
				{category && (
					<BoxSection title="Chi tiết">
						{/*Phone*/}
						{category._id === categoryId.phone && (
							<>
								<label>Loại điện thoại</label>
								<Controller
									control={control}
									name="type"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{phoneType.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>

								<label>Màn hình</label>
								<Controller
									control={control}
									name="sc"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{phoneSc.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<Controller
									control={control}
									name="ram"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.ram}
											options={phoneRam}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Loại ram" />}
											onChange={(_, data) =>
												setValue(
													'ram',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
								<Controller
									control={control}
									name="rom"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.rom}
											options={phoneRom}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Bộ nhớ trong" />}
											onChange={(_, data) =>
												setValue(
													'rom',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
							</>
						)}
						{/*Laptop*/}
						{category._id === categoryId.laptop && (
							<>
								<label>Màn hình</label>
								<Controller
									control={control}
									name="sc"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{laptopSc.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<label>Độ phân giải</label>
								<Controller
									control={control}
									name="res"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{laptopRes.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<label>CPU</label>
								<Controller
									control={control}
									name="cpu"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{laptopCpu.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<Controller
									control={control}
									name="ram"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.ram}
											options={laptopRam}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Loại ram" />}
											onChange={(_, data) =>
												setValue(
													'ram',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
								<Controller
									control={control}
									name="rom"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.rom}
											options={laptopRom}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Bộ nhớ trong" />}
											onChange={(_, data) =>
												setValue(
													'rom',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
							</>
						)}
						{/*Tablet*/}
						{category._id === categoryId.tablet && (
							<>
								<label>Màn hình</label>
								<Controller
									control={control}
									name="sc"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{tabletSc.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<Controller
									control={control}
									name="ram"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.ram}
											options={tabletRam}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Loại ram" />}
											onChange={(_, data) =>
												setValue(
													'ram',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
								<Controller
									control={control}
									name="rom"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.rom}
											options={tabletRom}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Bộ nhớ trong" />}
											onChange={(_, data) =>
												setValue(
													'rom',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
							</>
						)}
						{/*Watch*/}
						{category._id === categoryId.watch && (
							<>
								<label>Đường kính mặt</label>
								<Controller
									control={control}
									name="sc"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{watchSc.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<Controller
									control={control}
									name="sex"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.sex}
											options={watchSex}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Đối tượng sử dụng" />}
											onChange={(_, data) =>
												setValue(
													'sex',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
								<Controller
									control={control}
									name="color"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.color}
											options={colorOptions}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => (
												<Box display="flex" alignItems="center">
													<div
														style={{
															marginRight: 16,
															flexShrink: 0,
															width: 16,
															height: 16,
															borderRadius: '50%',
															border: '1px solid #00000070',
															backgroundColor: `${s.code}`,
														}}
													/>
													{s.label}
												</Box>
											)}
											renderTags={(value, getTagProps) =>
												value.map((option, index) => (
													<Chip
														label={option.label}
														{...getTagProps({ index })}
														style={{ backgroundColor: `${option.code}` }}
													/>
												))
											}
											renderInput={(params) => <BasicInput {...params} label="Màu sắc" />}
											onChange={(_, data) =>
												setValue(
													'color',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
							</>
						)}
						{/*smWatch*/}
						{category._id === categoryId.smWatch && (
							<>
								<label>Đường kính mặt</label>
								<Controller
									control={control}
									name="sc"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{smWatchSc.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<label>Hình dáng mặt</label>
								<Controller
									control={control}
									name="face"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{smWatchFace.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<label>Thời lượng pin</label>
								<Controller
									control={control}
									name="pin"
									render={({ field }) => (
										<RadioGroup row {...field}>
											{smWatchPin.map((v, i) => (
												<FormControlLabel
													key={i}
													value={v.value}
													control={<Radio color="primary" />}
													label={v.label}
												/>
											))}
										</RadioGroup>
									)}
								/>
								<Controller
									control={control}
									name="sex"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.sex}
											options={watchSex}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => <span>{s.label}</span>}
											renderInput={(params) => <BasicInput {...params} label="Đối tượng sử dụng" />}
											onChange={(_, data) =>
												setValue(
													'sex',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
								<Controller
									control={control}
									name="color"
									render={({ field }) => (
										<Autocomplete
											{...field}
											multiple
											value={defaultValues.color}
											options={colorOptions}
											getOptionLabel={(s) => s.label}
											renderOption={(s) => (
												<Box display="flex" alignItems="center">
													<div
														style={{
															marginRight: 16,
															flexShrink: 0,
															width: 16,
															height: 16,
															borderRadius: '50%',
															border: '1px solid #00000070',
															backgroundColor: `${s.code}`,
														}}
													/>
													{s.label}
												</Box>
											)}
											renderTags={(value, getTagProps) =>
												value.map((option, index) => (
													<Chip
														label={option.label}
														{...getTagProps({ index })}
														style={{ backgroundColor: `${option.code}` }}
													/>
												))
											}
											renderInput={(params) => <BasicInput {...params} label="Màu sắc" />}
											onChange={(_, data) =>
												setValue(
													'color',
													data.map(({ value }) => value)
												)
											}
										/>
									)}
								/>
							</>
						)}
					</BoxSection>
				)}
				<Box textAlign="end">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={isSubmitting}
						endIcon={isSubmitting && <CircularProgress size={16} />}
					>
						Lưu
					</Button>
				</Box>
			</Form>
		</>
	)
}

export default FormProductCreate
