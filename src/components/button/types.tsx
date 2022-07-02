export type PrimaryButtonType = {
    text: string;
    icon?: boolean;
    type?: string
};

export type DefaultButtonType = {
    text: string;
}

export type ButtonType = {
    Primary: React.FC<PrimaryButtonType>,
    Default: React.FC<DefaultButtonType>
}