import domtoimage from 'dom-to-image';

export const downloadImage = (node, width = 100, height = 100, type = 'svg') => {
	const config = {
		style: {
			'transform-origin': 'center'
		},
		quality: 1
	};

	const downloadFile = (dataUrl, ext) => {
		let link = document.createElement('a');
		link.download = `CoverImage.${ext}`;
		link.href = 'data:' + dataUrl;
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	if (type === 'png') {
		domtoimage.toPng(node, config).then(dataUrl => downloadFile(dataUrl, 'png'));
	} else if (type === 'jpeg') {
		domtoimage.toJpeg(node, config).then(dataUrl => downloadFile(dataUrl, 'jpeg'));
	} else if (type === 'svg') {
		domtoimage.toSvg(node, config).then(dataUrl => downloadFile(dataUrl, 'svg'));
	}
};
