import { PushColors } from "../redux/action";
import { connect, useDispatch, useStore } from "react-redux";
import React, { useState } from "react";

export function Apphook() {
    const [a, setA] = useState("a");
    const dispatch = useDispatch();
    const store = useStore();

    console.log(store);
    console.log('-------------------')
    dispatch(PushColors(["a", "i", "u"]));
    console.log(store);

    return (
        <div>
            <div>
                <p>React Hooks</p>
            </div>
            <div>
                <p>{a}</p>
                <button onClick={() => dispatch(PushColors(["a"]))}>a</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return state;
}

//const mapDispatchToProps = { PushColors };
const mapDispatchToProps = { PushColors };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Apphook);
  // <Timer width={300} height={300} radius={200} />