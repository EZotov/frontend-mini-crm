type ProfileModalDataUserEdit = {
    type: 'USER_EDIT';
};

type ProfileModalDataChangePassword = {
    type: 'CHANGE_PASSWORD';
};

export type ProfileModalData = ProfileModalDataUserEdit | ProfileModalDataChangePassword;
export type ProfileModalHandler = (data: ProfileModalData) => void;
