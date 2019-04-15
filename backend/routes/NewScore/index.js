import 'isomorphic-fetch';
import Jiro from '@madewithjiro/jiro-sdk';
const { Store } = new Jiro();

export default async (req, res) => {
    console.log('Saving data...');
    console.log(req.body.score);
    let nscores = [];

    await Store.arrayPush('scores', 'master', {
        scores: req.body.score,
    });

    const { scores } = await Store.get('scores', 'master');

    res.status(200).json({ scores });
}
