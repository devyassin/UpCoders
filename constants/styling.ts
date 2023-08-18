export const countrySelectStyling = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    height: "300px",
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#b9abab",
    opacity: "0.9",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderRadius: "20px",
    backgroundColor: "#0e0c0c",
    boxShadow: "0px 4px 28px -10px rgba(252, 247, 247, 0.25)",
    outline: "none",
    height: "61px",
    paddingLeft: "14px",
    paddingRight: "20px",
    border: "none",
    color: "white",
  }),
};

export const countrySelectStylingTwo = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    height: "300px",
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#b9abab",
    opacity: "0.9",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderRadius: "20px",
    backgroundColor: "#0e0c0c",
    boxShadow: "0px 4px 28px -10px rgba(252, 247, 247, 0.25)",
    outline: "none",
    paddingLeft: "14px",
    paddingRight: "20px",
    paddingTop: "12px",
    paddingBottom: "12px",
    border: "none",
    color: "white",
  }),
};

export const experienceLvlSelectStyling = {
  menuList: (base: any) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    overflow: "hidden",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#b9abab",
    opacity: "0.9",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderRadius: "20px",
    backgroundColor: "#0e0c0c",
    boxShadow: "0px 4px 28px -10px rgba(252, 247, 247, 0.25)",
    outline: "none",
    height: "61px",
    paddingLeft: "14px",
    paddingRight: "20px",
    border: "none",
    color: "white",
  }),
};
