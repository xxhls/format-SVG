export default function format(svg: string): string {

    let path = /\"M.*z\"/.exec(svg)

    if (path === null) {
        return 'ERROR<!!>This is a wrong input'
    }

    let cont = (path[0] as string)

    let res: string = ''

    for(let i = 0; i < cont.length; i++) {
        if(/[a-zA-Z]/.test(cont[i])) {
            res += `\n${cont[i]} `
            continue
        }
        if(/-/.test(cont[i])) {
            res += ` -`
            continue
        }
        res += cont[i]
    }

    let svg_cont = svg.replace(/\"M.*z\"/, res)
    svg_cont = svg_cont.replace(/></g, '>\n<')

    return svg_cont
}
