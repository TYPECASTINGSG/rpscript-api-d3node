import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('d3', () => {

  m.it('should generate svg', async function () {
    let ctx = new RpsContext
    let md = new RPSModule(ctx);

    let d3n = await md.newD3(ctx,{});
    d3n.createSVG(10,20).append('g');
    let s = d3n.svgString();

    expect(s).to.be.equals('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"><g></g></svg>');

  }).timeout(0);

})
