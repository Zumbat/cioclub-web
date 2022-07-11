// import { createTheme } from "@material-ui/core/styles";

// const colors = {
//   bastille: "#26222c",
//   darkBastille: "#211d27",
//   black: "#18141e",
//   white: "#f2f2f2",
//   blue: "#409cff",
//   violet: "#372b4a",
// };

// const muiTheme = createTheme({
//   overrides: {
//     MuiPaper: {
//       root: {
//         boxShadow: "none",
//         backgroundColor: colors.white,

//         "&.noFilters": {
//           "& .MuiToolbar-root": {
//             display: "none",
//           },
//           "& .MuiTableHead-root tr": {
//             "& th:first-child": {
//               borderRadius: "8px 0 0 0",
//             },
//             "& th:last-child": {
//               borderRadius: "0 8px 0 0",
//             },
//           },
//         },
//         "&.withFilters": {
//           "& .MuiTableHead-root": {
//             display: "table-header-group",
//           },
//         },
//       },
//       elevation4: {
//         boxShadow: "none",
//       },
//       rounded: {
//         borderRadius: "0",
//       },
//     },
//     MuiTableCell: {
//       root: {
//         wordBreak: "break-word",
//         borderBottom: "none",
//         "&.centeredHeader": {
//           "& span": {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           },
//           "& div": {
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "center",
//             alignItems: "center",
//           },
//         },
//         "&.centeredColumn": {
//           textAlign: "center",
//         },
//         "&.boldHeader": {
//           "& div": {
//             fontWeight: "500",
//           },
//         },
//       },
//       footer: {
//         display: "flex",
//         backgroundColor: colors.darkBastille,
//         justifyContent: "flex-end",
//         borderRadius: "0 0 8px 8px",
//         border: "none",
//       },
//     },
//     MUIDataTableHeadCell: {
//       root: {
//         "& > div": {
//           color: colors.white,
//         },
//       },
//       data: {
//         fontWeight: "500",
//         color: colors.white,
//       },
//       fixedHeader: {
//         backgroundColor: colors.darkBastille,
//         border: "none",
//       },
//       sortActive: {
//         color: colors.white,
//       },
//       toolButton: {
//         padding: "4px",
//         "&:hover": {
//           backgroundColor: colors.violet,

//           "& *": {
//             color: colors.white,
//           },
//         },
//       },
//       sortAction: {
//         display: "flex",
//         alignItems: "center",

//         "& svg path": {
//           color: colors.white,
//         },
//       },
//     },
//     MUIDataTableSelectCell: {
//       headerCell: {
//         backgroundColor: colors.darkBastille,

//         "& svg path": {
//           color: colors.white,
//         },
//       },
//     },
//     MUIDataTableToolbar: {
//       root: {
//         backgroundColor: colors.darkBastille,
//         borderRadius: "8px 8px 0 0",
//       },
//       filterPaper: {
//         maxWidth: "20%",
//         "& > div": {
//           paddingTop: "48px",
//         },
//       },
//       actions: {
//         "& svg path": {
//           color: colors.blue,
//         },
//       },
//     },
//     MUIDataTableSearch: {
//       main: {
//         display: "flex",
//         alignItems: "center",

//         "& *": {
//           color: colors.white,
//         },
//       },
//       searchIcon: {
//         marginTop: "0",

//         "& path": {
//           color: colors.blue,
//         },
//       },
//       searchText: {
//         "& .MuiInput-underline:before": {
//           borderBottom: "1px solid #393243",
//         },
//         "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
//           borderBottom: "1px solid #393243",
//         },
//         "& .MuiInput-underline:after": {
//           borderBottom: "1px solid #393243",
//         },
//       },
//       clearIcon: {
//         "& *": {
//           color: colors.blue,
//         },
//       },
//     },
//     MUIDataTableToolbarSelect: {
//       root: {
//         backgroundColor: colors.darkBastille,

//         "& *": {
//           color: colors.white,
//         },
//       },
//     },
//     MUIDataTableFilterList: {
//       root: {
//         backgroundColor: colors.darkBastille,
//         margin: "0",
//         padding: "0 16px",
//       },
//       chip: {
//         backgroundColor: colors.white,

//         "& span": {
//           color: colors.black,
//         },
//       },
//     },
//     MUIDataTableFilter: {
//       root: {
//         "& .MuiGrid-root": {
//           maxWidth: "none",
//           padding: "0",
//           marginTop: "10px",
//         },
//       },
//     },
//   },
// });

// export default muiTheme;
