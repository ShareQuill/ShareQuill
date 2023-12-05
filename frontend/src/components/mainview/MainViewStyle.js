export const HeroStyle = {
    'container' : {
        p: {
            xs: 2,
            sm: 5,
            md: 2,
        },
        background: `url(${"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=826&t=st=1701755922~exp=1701756522~hmac=e99677a2a73e5b4b1e4dbd01fe978798d825de4e33ac1125d51c951f5a320ebf"}) center center/cover`,
        minHeight: "800px",
        borderRadius: {
            xs: "0px 0px 27px 27px",
            md: "0px 0px 54px 54px",
        },
    },
    'box' : {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    'typography' : {
        color: "#fff",
        marginTop: "196.5px",
        textAlign: "center",
        fontWeight: "600",
        fontSize: {
        xs: "38px",
        md: "48px",
        },
        lineHeight: "62px",
        mb: 4,
    },
};