/**
 * @module d3node
 */

import D3Node from 'd3-node';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

let MOD_ID = "d3node"

export interface ModuleContext {
  node?:D3Node;
}

@RpsModule(MOD_ID)
export default class RPSModule {

  constructor(ctx:RpsContext){
  }

  @rpsAction({verbName:'create-d3'})
  async newD3 (ctx:RpsContext,opts:Object, ...params:Array<any>) : Promise<D3Node>{
    let d3 = new D3Node();
    ctx.addModuleContext(MOD_ID,{node:d3});

    return d3;
  }

}
