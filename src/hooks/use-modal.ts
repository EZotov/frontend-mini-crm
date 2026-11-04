import {useState} from 'react';

type ModalStateType<T = Record<string, unknown>> = {
    isOpen: boolean;
} & T;

export const useModal = <TModalData extends Record<string, unknown> = Record<string, unknown>>() => {
    const [modalState, setModalState] = useState<ModalStateType<TModalData>>({
        isOpen: false,
    } as ModalStateType<TModalData>);

    const {isOpen, ...modalData} = modalState;

    const onOpenModal = (data?: TModalData) => {
        setModalState((prevState) => ({
            ...prevState,
            isOpen: true,
            ...(data && data),
        }));
    };

    const onCloseModal = (resetState?: boolean) => {
        setModalState((prevState) =>
            resetState
                ? ({
                      isOpen: false,
                  } as ModalStateType<TModalData>)
                : {
                      ...prevState,
                      isOpen: false,
                  },
        );
    };

    return {
        isOpen,
        modalData: modalData as unknown as TModalData,
        onOpenModal,
        onCloseModal,
    };
};
