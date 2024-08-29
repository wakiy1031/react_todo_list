import { FC } from 'react'
import { Modal, ModalBody, ModalFooter, ModalOverlay } from '@yamada-ui/modal'
import { BaseButton } from '../atoms/button/BaseButton'

type Props = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    message: string
}

export const ConfirmDialog: FC<Props> = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalBody>
                {message}
            </ModalBody>
            <ModalFooter>
                <BaseButton onClick={onClose} colorScheme="gray">キャンセル</BaseButton>
                <BaseButton onClick={onConfirm} colorScheme="red">OK</BaseButton>
            </ModalFooter>
        </Modal>
    )
}
