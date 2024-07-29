// src/portfolioSlice.js
import { createSlice } from '@reduxjs/toolkit';
const projectText = {
  project1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat nibh in nisi lacinia dapibus. Mauris odio quam, varius ac mattis fringilla, sodales vitae odio. Cras placerat lacus nec orci dignissim, quis pulvinar mauris facilisis. Nam vel maximus elit. Duis facilisis lacus eget mi varius, non commodo nulla venenatis. Sed ac rhoncus augue, vitae efficitur elit. Donec at massa dapibus, ullamcorper lacus eu, volutpat sem. Quisque pretium metus vitae ex finibus rhoncus. Phasellus scelerisque velit sapien, vitae convallis leo sodales bibendum. Nullam condimentum pellentesque est, sit amet iaculis orci volutpat at. Nam iaculis tincidunt urna, venenatis fermentum diam fringilla quis. Curabitur maximus, velit at suscipit laoreet, tellus tellus consectetur ex, eu maximus sem lorem ut felis.",
  project2: "Nulla placerat at lacus et posuere. Integer congue, nisl et blandit congue, ante leo lacinia velit, ut dapibus mauris purus sed lectus. Nam ut risus a urna placerat mollis id sed libero. Quisque a dolor ut sem aliquet facilisis vel vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat vestibulum eros, vel faucibus elit auctor tincidunt. Duis sed dui vitae quam condimentum ultricies. Vestibulum malesuada pretium imperdiet. Donec dictum a tortor eget interdum. Cras cursus molestie porttitor. Nunc ut hendrerit nulla. Curabitur vulputate est pretium odio scelerisque, in sollicitudin velit sodales. In quis pretium orci, at vulputate ipsum. Sed facilisis lacinia tortor ut sagittis. Cras blandit nunc enim, vel imperdiet tellus ultricies vitae. Maecenas malesuada, leo eu fermentum porttitor, tortor ipsum finibus lacus, ac aliquam odio tellus et urna."
}
const projectList = [
  [
    // Add your project data here
    { id: 1, title: 'Project 1', imageUrl: 'images/image_1.jpg', text: projectText.project1},
    { id: 2, title: 'Project 2', imageUrl: 'images/image_2.jpg', text: projectText.project1},
    // More projects...
  ],[
    // Add your project data here
    { id: 3, title: 'Project 3', imageUrl: 'images/image_3.jpg', text: projectText.project2 },
    { id: 4, title: 'Project 4', imageUrl: 'images/image_4.jpg', text: projectText.project2 },
    // More projects...
  ],
]
const initialState = {
  projects: [
    // Add your project data here
    { id: 1, title: 'Project 1', imageUrl: 'images/image_1.jpg', text: projectText.project1},
    { id: 2, title: 'Project 2', imageUrl: 'images/image_2.jpg', text: projectText.project1 },
    // More projects...
  ]
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
  updatePage(state, action) {
    state.projects = projectList[action.payload.index];
  }
  }
});

export const { updatePage } = portfolioSlice.actions;
export default portfolioSlice.reducer;