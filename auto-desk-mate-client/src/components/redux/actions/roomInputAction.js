
import uuid from 'react-uuid';

export const getRoomInput = (room_width, room_height, dispatch) => {
    dispatch ({
        type: "GET_ROOM_INPUT",
        payload: {room_width, room_height}
    })
}


export const getDeskInput = (total_desks, dispatch) => {
    //converted into an array of objects 
    //{id: uuid(), student_name: null, xCoordidate: null, yCoordiate: null}
    function objConvert(arr){
        let sdesk = {id: 0, student_name: null, xCoordidate: null, yCoordiate: null}
        let all_desks = []
        for(let i = 0; i < arr.length; i++){
            let ob = {...sdesk}
            ob.id = uuid()
            all_desks.push(ob)
           
        }
        return all_desks
    }
    
    function countUpTo(total_desks){
      let num = parseInt(total_desks)
      let arr = []
      for(let i = 1; i <= num; i++){
        arr.push(i)
      }
      return arr
    }
    dispatch ({
        type: "GET_DESK_INPUT",
        payload:  objConvert(countUpTo(total_desks))
        //turn the string into an arrray
    })
}