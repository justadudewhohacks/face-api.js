const classes = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart']

function getFaceImageUri(className, idx) {
	return `${className}/${className}${idx}.png`
}

function renderFaceImageSelectList(selectListId, onChange, initialValue) {
	const indices = [1, 2, 3, 4, 5]

	function renderChildren(select) {
		classes.forEach(className => {
			const optgroup = document.createElement('optgroup')
			optgroup.label = className
			select.appendChild(optgroup)
			indices.forEach(imageIdx =>
				renderOption(
					optgroup,
					`${className} ${imageIdx}`,
					getFaceImageUri(className, imageIdx)
				)
			)
		})
	}

	renderSelectList(
		selectListId,
		onChange,
		getFaceImageUri(initialValue.className, initialValue.imageIdx),
		renderChildren
	)
}

// fetch first image of each class and compute their descriptors
async function createBbtFaceMatcher(numImagesForTraining = 1) {
	const maxAvailableImagesPerClass = 5
	numImagesForTraining = Math.min(numImagesForTraining, maxAvailableImagesPerClass)

	const labeledFaceDescriptors = await Promise.all(classes.map(
		async className => {
			const descriptors = []
			for (let i = 1; i < (numImagesForTraining + 1); i++) {
				const img = await faceapi.fetchImage(getFaceImageUri(className, i))
				descriptors.push(await faceapi.computeFaceDescriptor(img))
			}

			return new faceapi.LabeledFaceDescriptors(
				className,
				descriptors
			)
		}
	))

	return new faceapi.FaceMatcher(labeledFaceDescriptors)
}

// 获取文件名以及设置对比模型
async function createBsmFaceMatcher() {
	const list = await $.get("/imageList")
	return Promise.all(list.map(async file => {
		// fetch image data from urls and convert blob to HTMLImage element
		const imgUrl = `/bbt/${file}`
		const img = await faceapi.fetchImage(imgUrl)

		// detect the face with the highest score in the image and compute it's landmarks and face descriptor
		const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

		if (!fullFaceDescription) {
			throw new Error(`no faces detected for ${file}`)
		}
		const faceDescriptors = [fullFaceDescription.descriptor]
		return new faceapi.LabeledFaceDescriptors(file.split('.')[0], faceDescriptors)
	}))
}
