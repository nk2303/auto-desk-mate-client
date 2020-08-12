export const startDeskDrag = (desk_id, dispatch) => {
    dispatch ({
        type: "ON_DESK_DRAG",
        payload: {id: desk_id}
    })
}