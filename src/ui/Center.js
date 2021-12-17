import React from "react";

const Center = ({children, horizontal, spaced}) => {
   let direction = horizontal ? "column" : "row";
   let spacing = spaced ? "space-around" : "center"

   return (
      <div
         style={{
            display: "flex",
            justifyContent: spacing,
            alignItems: "center",
            flexDirection: direction
         }}
      >
         {children}
      </div>
   );
};

export default Center;
