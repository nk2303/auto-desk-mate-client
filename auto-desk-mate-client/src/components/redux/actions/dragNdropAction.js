export const startDeskDrag = (desk, dispatch) => {
    const newDesk = {desk}
    dispatch ({
        type: "ON_DESK_DRAG",
        payload: newDesk.desk
    })
}

export const dropDeskOnDB = (desk, dispatch) => {
    const newDesk = {desk}
    dispatch ({
        type: "ON_DESK_BOARD_DROP",
        payload: newDesk.desk
    })
}

export const dropDeskOnGrid = (desk, dispatch) => {
    const droppedDesk = {desk}
    dispatch ({
        type: "ON_GRID_BOARD_DROP",
        payload: droppedDesk.desk
    })
}