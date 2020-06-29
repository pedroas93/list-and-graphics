import React from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';

function ModalPrint({ openModal, handleCloseModal }) {
    const list = useSelector((state) => {
        return state.listSort;
    })
    return (
        <div>
            <Modal
                style={{ top: 20 }}
                title="Imprimiendo valores"
                visible={openModal}
                footer={null}
                width={760}
                onCancel={handleCloseModal}
                onClose={handleCloseModal}
            >
                {
                    list.map((element) => {
                        return (
                            <option value={element} key={element}>
                                {element}
                            </option>
                        )
                    })
                }


            </Modal>
        </div>
    );
}



export default ModalPrint