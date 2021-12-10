const baseTextStyle = {
	textAlign: 'start' as const,
	color: '#36393a',
};

export const urlShortenerStyles = {
	width: '1024px',
	margin: '28px auto 16px',
	textAlign: 'center' as const,
	height: '480px',
	backgroundColor: '#f3f3f3',
};

export const shortenerTitle = {
	fontFamily: 'Inter',
	margin: '0',
	padding: '28px 0 16px',
};

export const form = {
	display: 'flex',
	width: '980px',
	margin: '10px auto 33px',
	justifyContent: 'space-between',
};

export const longUrlInput = {
	display: 'flex',
	flexDirection: 'column' as const,
	width: '50%',
};

export const shortUrlInput = {
	display: 'flex',
	flexDirection: 'column' as const,
	width: '25%',
};

export const inputLabel = {
	fontFamily: 'Inter',
	fontSize: '18px',
	alignSelf: 'flex-start',
}

export const submit = {
	width: '20%',
	height: '22px',
    alignSelf: 'flex-end',
};

export const urlStyles = {
	urlList: {
		width: '980px',
		margin: 'auto',
		backgroundColor: '#fff',
		borderRadius: '4px',
	},

	url: {
		display: 'flex' as const,
		alignItems: 'center',
		height: '40px',

		fontFamily: 'Inter',
	},

	urlId: {
		width: '42px',
	},

	fullUrl: {
		width: '520px',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap' as const,
		paddingRight: '20px',
		...baseTextStyle,
	},

	shortUrl: {
		width: '280px',
		...baseTextStyle,
	},

	deleteUrl: {
		width: '118px',
		...baseTextStyle,
		textAlign: 'center' as const,
	}
};

export const urlListHeader = {
	fontFamily: 'Inter',
	fontSize: '18px',
	display: 'flex' as const,
	borderBottom: '2px solid #1485a9',
	height: '44px',
    alignItems: 'center',
};
