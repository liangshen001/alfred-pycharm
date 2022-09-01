import alfred, {OutputItem} from "@liangshen/alfred";
import {getRecentProjects} from "@liangshen/jetbrains"

const items: OutputItem[] = [{arg: '', title: 'Open', subtitle: ''}]
try {
    const recentProjects = await getRecentProjects('PyCharm');
    items.push(...recentProjects.reverse().map(i => ({
        arg: i.path,
        title: i.name,
        subtitle: i.path
    })));
} catch (e) {
}
alfred.output({items}, ['title']);