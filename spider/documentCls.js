/**
 * Created by Anshi on 2017/7/4.
 */
export default {
    getUserListFromOrigin(json){
        let newJson = [];
        if (json.ok === 1 && json.cards && json.cards.length > 0) {
            json.cards.forEach((item, idx) => {
                let newItem = {};
                newJson[idx] = newItem;
                if (item.card_type === 9) {
                    item = item.mblog;
                    newItem.created = item.created_at;
                    newItem.idstr = item.idstr;
                    newItem.text = item.text;
                    newItem.tags = ['daily'];
                    newItem.user = item.user.screen_name;
                    newItem.ava = item.user.profile_image_url;
                    newItem.pics = [];
                    if (item.pics) {
                        item.pics.forEach((i, idx) => {
                            newItem.pics[idx] = {
                                large: {
                                    url: i.large.url,
                                    size: [i.large.geo.width, i.large.geo.height]
                                },
                                pre: {
                                    url: i.url,
                                    size: [i.geo.width, i.geo.height]
                                }
                            }
                        })
                    }
                }
            })
        }
        return newJson;
    }
}