export function pageCleanPast(elem, page) {
    switch (page.hasChildNodes()) {
        case true:
            let children = page.childNodes;
            for (let i = 0; i < children.length; ++i) {
                children[i].remove()
            };
        case true:
            return page.append(elem)
        default:
            return page.append(elem)
    }

}
        // _______________First option______________\\
        // const element = document.querySelector('#auth_div');
        // console.log(root_right.childNodes[0]);
        // event.preventDefault();
        // if (element === null) { root_right.append(auth) } else (element.remove())

        // _____________Second option________________\\
        // if (root_right.hasChildNodes()) {
        //     let children = root_right.childNodes;

        //     for (let i = 0; i < children.length; ++i) {
        //         children[i].remove()
        //     }
        // } else { root_right.append(auth) }

        // ___________Third option___________________\\
        // switch (root_right.hasChildNodes()) {
        //     case true:
        //         let children = root_right.childNodes;
        //         for (let i = 0; i < children.length; ++i) {
        //             children[i].remove()
        //         };
        //     // console.log('ONE')
        //     case true:
        //         root_right.append(auth)
        //         // console.log('TWO')
        //         break;
        //     default:
        //         // console.log('DEFAULT')
        //         root_right.append(auth)
        // }
        // ____________________________________________\\