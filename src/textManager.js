// src/portfolioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "Works",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat nibh in nisi lacinia dapibus. Mauris odio quam, varius ac mattis fringilla, sodales vitae odio. Cras placerat lacus nec orci dignissim, quis pulvinar mauris facilisis. Nam vel maximus elit. Duis facilisis lacus eget mi varius, non commodo nulla venenatis. Sed ac rhoncus augue, vitae efficitur elit. Donec at massa dapibus, ullamcorper lacus eu, volutpat sem. Quisque pretium metus vitae ex finibus rhoncus. Phasellus scelerisque velit sapien, vitae convallis leo sodales bibendum. Nullam condimentum pellentesque est, sit amet iaculis orci volutpat at. Nam iaculis tincidunt urna, venenatis fermentum diam fringilla quis. Curabitur maximus, velit at suscipit laoreet, tellus tellus consectetur ex, eu maximus sem lorem ut felis."
};



const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
  updateText(state, action) {
    state.title = action.payload.title;
    state.text = action.payload.text;
  }
  }
});

export const { updateText } = titleSlice.actions;
export default titleSlice.reducer;