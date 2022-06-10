const { createSlice } = require("@reduxjs/toolkit");

const empSlice = createSlice({
  name: "emp",
  initialState: {
    data: [],
  },
  reducers: {
    setList(state: any, action: any) {
      return { ...state, data: action.payload };
    },
    addItem(state: any, action: any) {
      return { ...state, data: [...state.data, action.payload] };
    },
    removeItem(state: any, action: any) {
      return {
        ...state,
        data: state.data.filter((o: any) => o.id !== action.payload),
      };
    },
  },
});

export const { setList, addItem, removeItem } = empSlice.actions;
export default empSlice.reducer;

export function fetchList(): any {
  return async function fetchListThunk(dispatch: any, getState: any) {
    try {
      const res = await fetch("/api/emp", { method: "GET" });
      const response = await res.json();
      if (response.status === 200) {
        dispatch(setList(response.data));
      }
    } catch (error) {
      console.log("ERROR");
    }
  };
}
export function addList(data: any): any {
  return async function addListThunk(dispatch: any, getState: any) {
    try {
      const res = await fetch("/api/emp", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response.status === 201) {
        dispatch(addItem(response.data));
      }
    } catch (error) {
      console.log("ERROR");
    }
  };
}
export function removeList(id: string): any {
  return async function removeListThunk(dispatch: any, getState: any) {
    try {
      const res = await fetch(`/api/emp?id=${id}`, { method: "DELETE" });
      const response = await res.json();
      if (response.status === 200) {
        dispatch(removeItem(id));
      }
    } catch (error) {
      console.log("ERROR");
    }
  };
}

export function uploadFile(body: any): any {
  return async function uploadFileThunk(dispatch: any, getState: any) {
    try {
      const res = await fetch(`/api/file`, { method: "POST", body });
      const response = await res.json();
      return response;
    } catch (error) {
      console.log("ERROR");
    }
  };
}
