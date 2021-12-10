export interface IUrlCardProps {
	id: string,
	full_url: string,
	short_url: string,
}

export interface IRemoveInviteeIconProps {
	urlId: string;
}

export interface IMainPageProps {
	urls: IUrlCardProps[],
}