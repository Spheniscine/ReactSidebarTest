import React from "react";
import { css } from "@emotion/css";

const demoContentStyle = css({
    display: "flex",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem"
})

type DemoContentProps = {
    title: string
}

function DemoContent({ title }: DemoContentProps) {
    return (
        <div className={demoContentStyle}>
            <h1>{title}</h1>
        </div>
    )
}

export default DemoContent