
export const getRoomInput = (total_desks, room_width, room_height, dispatch) => {
    dispatch ({
        type: "GET_ROOM_INPUT",
        payload: {total_desks, room_width, room_height}
    })
}
