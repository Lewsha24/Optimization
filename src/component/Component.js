import React, {lazy, Suspense} from "react";

const ComponentName =  (name) => {
    return lazy(
        () => import(`../component/${name}`)
            .then(module => ({default: module[name]}))
    )
}

export function Component (props) {

    const Component = ComponentName(props.name)
    return (
        <Suspense fallback={"Loading...."}>
            <Component {...props}/>
        </Suspense>
    )
}