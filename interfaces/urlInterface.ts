export interface IUrlData {
	id: string,
	full_url: string,
	short_url: string,
}
export interface IUrlCardProps {
	urlData: IUrlData,
}

export interface IRemoveInviteeIconProps {
	urlId: string;
}

export interface IMainPageProps {
	urls: IUrlData[],
}

export interface IErrorTypeProps {
	errorType: string;
}