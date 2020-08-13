export const getRoomInput = (room_width, room_height, dispatch) => {
    dispatch ({
        type: "GET_ROOM_INPUT",
        payload: {room_width, room_height}
    })
}

//One return an array, one reutnr an object
export const getDeskInput = (total_desks, dispatch) => {
    dispatch ({
        type: "GET_DESK_INPUT",
        payload: parseInt(total_desks) 
        //turn the string into an arrray
    })
}