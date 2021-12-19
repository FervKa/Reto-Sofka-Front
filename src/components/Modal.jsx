import React from 'react'

const Modal = () => {


    return (
        <>

            <div className="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Acerca de mí</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="Info" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Esta es la prueba
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="Info">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
