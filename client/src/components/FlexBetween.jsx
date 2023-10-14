const { Box } = require("@mui/material");
const { styled }  = require("@mui/system");

// we making a style component its a way to reuse css in a component manner

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween;