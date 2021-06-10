// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    accountAddress: ctc0,
    inputValue: ctc1,
    returnValue: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  return {
    infos: {
      "Leaderboard": {
        leaderboard: {
          decode: (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v232] = svs;
              return (((() => {
                
                
                return v232;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v27] = svs;
              return (((() => {
                
                const v49 = {
                  accountAddress: v27,
                  inputValue: stdlib.checkedBigNumberify('./index.rsh:61:29:decimal', stdlib.UInt_max, 0),
                  returnValue: stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 0)
                  };
                const v52 = [v49, v49, v49];
                
                return v52;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
      },
    views: {
      1: [ctc3],
      2: [ctc0]
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Contestant(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Object({
    accountAddress: ctc3,
    inputValue: ctc0,
    returnValue: ctc0
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc5, ctc6, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc5, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc5, ctc3, ctc0, ctc0, ctc0, ctc6, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc5, ctc3, ctc0, ctc0, ctc6, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6]);
  
  
  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.informBounty(v28, v29), {
    at: './index.rsh:55:38:application',
    fs: ['at ./index.rsh:54:17:application call to [unknown function] (defined at: ./index.rsh:54:35:function exp)'],
    msg: 'informBounty',
    who: 'Contestant'
    });
  
  const v57 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:66:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:66:78:decimal', stdlib.UInt_max, 0)
    };
  const v61 = [v57, v57, v57];
  let v54 = v57;
  let v55 = true;
  let v56 = v61;
  let v254 = v32;
  let v256 = v28;
  
  while ((() => {
    
    return v55;})()) {
    const v88 = stdlib.protect(ctc2, await interact.submitValue(), {
      at: './index.rsh:72:74:application',
      fs: ['at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:71:29:function exp)', 'at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)'],
      msg: 'submitValue',
      who: 'Contestant'
      });
    let v90;
    switch (v88[0]) {
      case 'None': {
        
        v90 = false;
        
        break;
        }
      case 'Some': {
        const v94 = v88[1];
        v90 = true;
        
        break;
        }
      }
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:66:31:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc6, ctc0, ctc0, ctc2], [v27, v29, v54, v56, v254, v256, v88], [stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', stdlib.UInt_max, 0), []], [ctc2], v90, false, v29, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:66:31:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
      const [v103] = txn2.data;
      const v107 = txn2.time;
      const v102 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      let v115;
      switch (v103[0]) {
        case 'None': {
          
          v115 = stdlib.checkedBigNumberify('./index.rsh:81:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v119 = v103[1];
          v115 = v119;
          
          break;
          }
        }
      const v126 = stdlib.mod(v115, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 420));
      const v160 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 0)];
      const v161 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 1)];
      const v162 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 2)];
      let v163;
      const v164 = v160.returnValue;
      const v165 = stdlib.lt(v164, v126);
      if (v165) {
        const v166 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v167 = stdlib.Array_set(v56, stdlib.checkedBigNumberify('./index.rsh:89:95:decimal', stdlib.UInt_max, 0), v166);
        const v170 = [true, stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 1), v167];
        v163 = v170;
        }
      else {
        const v171 = [false, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1), v56];
        v163 = v171;
        }
      const v173 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v174 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v175 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v172;
      if (v173) {
        const v176 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v177 = stdlib.lt(v176, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v177) {
          const v181 = stdlib.Array_set(v175, v176, v161);
          const v196 = [v173, v176, v181];
          v172 = v196;
          }
        else {
          const v197 = [v173, v174, v175];
          v172 = v197;
          }
        }
      else {
        const v184 = v161.returnValue;
        const v185 = stdlib.lt(v184, v126);
        if (v185) {
          const v186 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v187 = stdlib.lt(v186, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v187) {
            const v189 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v191 = stdlib.Array_set(v175, v174, v189);
            const v198 = [true, v186, v191];
            v172 = v198;
            }
          else {
            const v199 = [true, v174, v175];
            v172 = v199;
            }
          }
        else {
          const v194 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v200 = [false, v194, v175];
          v172 = v200;
          }
        }
      const v202 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v203 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v204 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v201;
      if (v202) {
        const v205 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v206 = stdlib.lt(v205, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v206) {
          const v210 = stdlib.Array_set(v204, v205, v162);
          const v225 = [v202, v205, v210];
          v201 = v225;
          }
        else {
          const v226 = [v202, v203, v204];
          v201 = v226;
          }
        }
      else {
        const v213 = v162.returnValue;
        const v214 = stdlib.lt(v213, v126);
        if (v214) {
          const v215 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v216) {
            const v218 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v220 = stdlib.Array_set(v204, v203, v218);
            const v227 = [true, v215, v220];
            v201 = v227;
            }
          else {
            const v228 = [true, v203, v204];
            v201 = v228;
            }
          }
        else {
          const v223 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v229 = [false, v223, v204];
          v201 = v229;
          }
        }
      const v230 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 0)];
      const v232 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 2)];
      if (v230) {
        sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:110:41:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v29, v54, v102, v107, v115, v126, v232, v256]);
        sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:110:41:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v29, v54, v102, v115, v126, v232, v256]);
        sim_r.view = [ctc12, [stdlib.checkedBigNumberify('./index.rsh:110:41:after expr stmt semicolon', stdlib.UInt_max, 1), v232]];
        sim_r.isHalt = false;
        }
      else {
        const v236 = v54.returnValue;
        const v237 = stdlib.gt(v126, v236);
        const v238 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v239 = v237 ? v238 : v54;
        const cv54 = v239;
        const cv55 = true;
        const cv56 = v232;
        const cv254 = v107;
        const cv256 = v256;
        
        (() => {
          const v54 = cv54;
          const v55 = cv55;
          const v56 = cv56;
          const v254 = cv254;
          const v256 = cv256;
          
          if ((() => {
            
            return v55;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v247 = v54.accountAddress;
            sim_r.txns.push({
              amt: v256,
              kind: 'from',
              to: v247,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }})();}
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc6, ctc0, ctc0], [v27, v29, v54, v56, v254, v256], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
        const [] = txn3.data;
        const v244 = txn3.time;
        const v242 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv54 = v54;
        const cv55 = false;
        const cv56 = v56;
        const cv254 = v244;
        const cv256 = v256;
        
        (() => {
          const v54 = cv54;
          const v55 = cv55;
          const v56 = cv56;
          const v254 = cv254;
          const v256 = cv256;
          
          if ((() => {
            
            return v55;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v247 = v54.accountAddress;
            sim_r.txns.push({
              amt: v256,
              kind: 'from',
              to: v247,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v244 = txn3.time;
      const v242 = txn3.from;
      ;
      const cv54 = v54;
      const cv55 = false;
      const cv56 = v56;
      const cv254 = v244;
      const cv256 = v256;
      
      v54 = cv54;
      v55 = cv55;
      v56 = cv56;
      v254 = cv254;
      v256 = cv256;
      
      continue;
      }
    else {
      const [v103] = txn2.data;
      const v107 = txn2.time;
      const v102 = txn2.from;
      ;
      stdlib.protect(ctc1, await interact.informSuccess(true), {
        at: './index.rsh:80:73:application',
        fs: ['at ./index.rsh:80:44:application call to [unknown function] (defined at: ./index.rsh:80:48:function exp)', 'at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)'],
        msg: 'informSuccess',
        who: 'Contestant'
        });
      
      let v115;
      switch (v103[0]) {
        case 'None': {
          
          v115 = stdlib.checkedBigNumberify('./index.rsh:81:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v119 = v103[1];
          v115 = v119;
          
          break;
          }
        }
      const v126 = stdlib.mod(v115, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 420));
      const v160 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 0)];
      const v161 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 1)];
      const v162 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 2)];
      let v163;
      const v164 = v160.returnValue;
      const v165 = stdlib.lt(v164, v126);
      if (v165) {
        const v166 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v167 = stdlib.Array_set(v56, stdlib.checkedBigNumberify('./index.rsh:89:95:decimal', stdlib.UInt_max, 0), v166);
        const v170 = [true, stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 1), v167];
        v163 = v170;
        }
      else {
        const v171 = [false, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1), v56];
        v163 = v171;
        }
      const v173 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v174 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v175 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v172;
      if (v173) {
        const v176 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v177 = stdlib.lt(v176, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v177) {
          const v181 = stdlib.Array_set(v175, v176, v161);
          const v196 = [v173, v176, v181];
          v172 = v196;
          }
        else {
          const v197 = [v173, v174, v175];
          v172 = v197;
          }
        }
      else {
        const v184 = v161.returnValue;
        const v185 = stdlib.lt(v184, v126);
        if (v185) {
          const v186 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v187 = stdlib.lt(v186, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v187) {
            const v189 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v191 = stdlib.Array_set(v175, v174, v189);
            const v198 = [true, v186, v191];
            v172 = v198;
            }
          else {
            const v199 = [true, v174, v175];
            v172 = v199;
            }
          }
        else {
          const v194 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v200 = [false, v194, v175];
          v172 = v200;
          }
        }
      const v202 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v203 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v204 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v201;
      if (v202) {
        const v205 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v206 = stdlib.lt(v205, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v206) {
          const v210 = stdlib.Array_set(v204, v205, v162);
          const v225 = [v202, v205, v210];
          v201 = v225;
          }
        else {
          const v226 = [v202, v203, v204];
          v201 = v226;
          }
        }
      else {
        const v213 = v162.returnValue;
        const v214 = stdlib.lt(v213, v126);
        if (v214) {
          const v215 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v216) {
            const v218 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v220 = stdlib.Array_set(v204, v203, v218);
            const v227 = [true, v215, v220];
            v201 = v227;
            }
          else {
            const v228 = [true, v203, v204];
            v201 = v228;
            }
          }
        else {
          const v223 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v229 = [false, v223, v204];
          v201 = v229;
          }
        }
      const v230 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 0)];
      const v232 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 2)];
      if (v230) {
        const txn3 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:111:44:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc3, ctc0, ctc0, ctc0, ctc6, ctc0], [v27, v29, v54, v102, v107, v115, v126, v232, v256], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:111:44:dot', stdlib.UInt_max, 4), v27, v29, v54, v102, v107, v115, v126, v232, v256]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:111:44:dot', stdlib.UInt_max, 4), v27, v29, v54, v102, v115, v126, v232, v256]);
          const [] = txn3.data;
          const v235 = txn3.time;
          const v233 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v236 = v54.returnValue;
          const v237 = stdlib.gt(v126, v236);
          const v238 = {
            accountAddress: v102,
            inputValue: v115,
            returnValue: v126
            };
          const v239 = v237 ? v238 : v54;
          const cv54 = v239;
          const cv55 = true;
          const cv56 = v232;
          const cv254 = v235;
          const cv256 = v256;
          
          (() => {
            const v54 = cv54;
            const v55 = cv55;
            const v56 = cv56;
            const v254 = cv254;
            const v256 = cv256;
            
            if ((() => {
              
              return v55;})()) {
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
              sim_r.isHalt = false;
              }
            else {
              const v247 = v54.accountAddress;
              sim_r.txns.push({
                amt: v256,
                kind: 'from',
                to: v247,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        const [] = txn3.data;
        const v235 = txn3.time;
        const v233 = txn3.from;
        ;
        const v236 = v54.returnValue;
        const v237 = stdlib.gt(v126, v236);
        const v238 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v239 = v237 ? v238 : v54;
        const cv54 = v239;
        const cv55 = true;
        const cv56 = v232;
        const cv254 = v235;
        const cv256 = v256;
        
        v54 = cv54;
        v55 = cv55;
        v56 = cv56;
        v254 = cv254;
        v256 = cv256;
        
        continue;
        }
      else {
        const v236 = v54.returnValue;
        const v237 = stdlib.gt(v126, v236);
        const v238 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v239 = v237 ? v238 : v54;
        const cv54 = v239;
        const cv55 = true;
        const cv56 = v232;
        const cv254 = v107;
        const cv256 = v256;
        
        v54 = cv54;
        v55 = cv55;
        v56 = cv56;
        v254 = cv254;
        v256 = cv256;
        
        continue;}}
    }
  const v247 = v54.accountAddress;
  ;
  return;
  
  };
export async function Funder(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    amt: ctc0,
    deadline: ctc0
    });
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Object({
    accountAddress: ctc4,
    inputValue: ctc0,
    returnValue: ctc0
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc6, ctc7, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc6, ctc7, ctc0]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0]);
  
  
  const v20 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc1, await interact.getBounty(), {
    at: './index.rsh:47:72:application',
    fs: ['at ./index.rsh:46:24:application call to [unknown function] (defined at: ./index.rsh:46:28:function exp)'],
    msg: 'getBounty',
    who: 'Funder'
    });
  const v25 = v24.amt;
  const v26 = v24.deadline;
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:51:20:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v20, v25, v26], [v25, []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:51:20:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:51:20:dot', stdlib.UInt_max, 0)]);
    const [v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v27 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    const v57 = {
      accountAddress: v27,
      inputValue: stdlib.checkedBigNumberify('./index.rsh:66:93:decimal', stdlib.UInt_max, 0),
      returnValue: stdlib.checkedBigNumberify('./index.rsh:66:78:decimal', stdlib.UInt_max, 0)
      };
    const v61 = [v57, v57, v57];
    const v54 = v57;
    const v55 = true;
    const v56 = v61;
    const v254 = v32;
    const v256 = v28;
    
    if ((() => {
      
      return v55;})()) {
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
      sim_r.isHalt = false;
      }
    else {
      const v247 = v54.accountAddress;
      sim_r.txns.push({
        amt: v256,
        kind: 'from',
        to: v247,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc10, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
      sim_r.view = [ctc10, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  const v57 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:66:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:66:78:decimal', stdlib.UInt_max, 0)
    };
  const v61 = [v57, v57, v57];
  let v54 = v57;
  let v55 = true;
  let v56 = v61;
  let v254 = v32;
  let v256 = v28;
  
  while ((() => {
    
    return v55;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc3], false, v29));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc6, ctc7, ctc0, ctc0], [v27, v29, v54, v56, v254, v256], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:118:33:dot', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
        const [] = txn3.data;
        const v244 = txn3.time;
        const v242 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv54 = v54;
        const cv55 = false;
        const cv56 = v56;
        const cv254 = v244;
        const cv256 = v256;
        
        (() => {
          const v54 = cv54;
          const v55 = cv55;
          const v56 = cv56;
          const v254 = cv254;
          const v256 = cv256;
          
          if ((() => {
            
            return v55;})()) {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v254, v256]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v54, v56, v256]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:66:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v247 = v54.accountAddress;
            sim_r.txns.push({
              amt: v256,
              kind: 'from',
              to: v247,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc10, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
            sim_r.view = [ctc10, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v244 = txn3.time;
      const v242 = txn3.from;
      ;
      const cv54 = v54;
      const cv55 = false;
      const cv56 = v56;
      const cv254 = v244;
      const cv256 = v256;
      
      v54 = cv54;
      v55 = cv55;
      v56 = cv56;
      v254 = cv254;
      v256 = cv256;
      
      continue;
      }
    else {
      const [v103] = txn2.data;
      const v107 = txn2.time;
      const v102 = txn2.from;
      ;
      let v115;
      switch (v103[0]) {
        case 'None': {
          
          v115 = stdlib.checkedBigNumberify('./index.rsh:81:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v119 = v103[1];
          v115 = v119;
          
          break;
          }
        }
      const v126 = stdlib.mod(v115, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 420));
      const v160 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 0)];
      const v161 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 1)];
      const v162 = v56[stdlib.checkedBigNumberify('./index.rsh:89:86:application', stdlib.UInt_max, 2)];
      let v163;
      const v164 = v160.returnValue;
      const v165 = stdlib.lt(v164, v126);
      if (v165) {
        const v166 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v167 = stdlib.Array_set(v56, stdlib.checkedBigNumberify('./index.rsh:89:95:decimal', stdlib.UInt_max, 0), v166);
        const v170 = [true, stdlib.checkedBigNumberify('./index.rsh:99:65:decimal', stdlib.UInt_max, 1), v167];
        v163 = v170;
        }
      else {
        const v171 = [false, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1), v56];
        v163 = v171;
        }
      const v173 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v174 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v175 = v163[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v172;
      if (v173) {
        const v176 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v177 = stdlib.lt(v176, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v177) {
          const v181 = stdlib.Array_set(v175, v176, v161);
          const v196 = [v173, v176, v181];
          v172 = v196;
          }
        else {
          const v197 = [v173, v174, v175];
          v172 = v197;
          }
        }
      else {
        const v184 = v161.returnValue;
        const v185 = stdlib.lt(v184, v126);
        if (v185) {
          const v186 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v187 = stdlib.lt(v186, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v187) {
            const v189 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v191 = stdlib.Array_set(v175, v174, v189);
            const v198 = [true, v186, v191];
            v172 = v198;
            }
          else {
            const v199 = [true, v174, v175];
            v172 = v199;
            }
          }
        else {
          const v194 = stdlib.add(v174, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v200 = [false, v194, v175];
          v172 = v200;
          }
        }
      const v202 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 0)];
      const v203 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 1)];
      const v204 = v172[stdlib.checkedBigNumberify('./index.rsh:89:113:array', stdlib.UInt_max, 2)];
      let v201;
      if (v202) {
        const v205 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', stdlib.UInt_max, 1));
        const v206 = stdlib.lt(v205, stdlib.checkedBigNumberify('./index.rsh:91:58:dot', stdlib.UInt_max, 3));
        if (v206) {
          const v210 = stdlib.Array_set(v204, v205, v162);
          const v225 = [v202, v205, v210];
          v201 = v225;
          }
        else {
          const v226 = [v202, v203, v204];
          v201 = v226;
          }
        }
      else {
        const v213 = v162.returnValue;
        const v214 = stdlib.lt(v213, v126);
        if (v214) {
          const v215 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:98:51:decimal', stdlib.UInt_max, 1));
          const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:98:62:dot', stdlib.UInt_max, 3));
          if (v216) {
            const v218 = {
              accountAddress: v102,
              inputValue: v115,
              returnValue: v126
              };
            const v220 = stdlib.Array_set(v204, v203, v218);
            const v227 = [true, v215, v220];
            v201 = v227;
            }
          else {
            const v228 = [true, v203, v204];
            v201 = v228;
            }
          }
        else {
          const v223 = stdlib.add(v203, stdlib.checkedBigNumberify('./index.rsh:104:62:decimal', stdlib.UInt_max, 1));
          const v229 = [false, v223, v204];
          v201 = v229;
          }
        }
      const v230 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 0)];
      const v232 = v201[stdlib.checkedBigNumberify('./index.rsh:89:35:array', stdlib.UInt_max, 2)];
      if (v230) {
        const txn3 = await (ctc.recv(6, 0, [], false, false));
        const [] = txn3.data;
        const v235 = txn3.time;
        const v233 = txn3.from;
        ;
        const v236 = v54.returnValue;
        const v237 = stdlib.gt(v126, v236);
        const v238 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v239 = v237 ? v238 : v54;
        const cv54 = v239;
        const cv55 = true;
        const cv56 = v232;
        const cv254 = v235;
        const cv256 = v256;
        
        v54 = cv54;
        v55 = cv55;
        v56 = cv56;
        v254 = cv254;
        v256 = cv256;
        
        continue;
        }
      else {
        const v236 = v54.returnValue;
        const v237 = stdlib.gt(v126, v236);
        const v238 = {
          accountAddress: v102,
          inputValue: v115,
          returnValue: v126
          };
        const v239 = v237 ? v238 : v54;
        const cv54 = v239;
        const cv55 = true;
        const cv56 = v232;
        const cv254 = v107;
        const cv256 = v256;
        
        v54 = cv54;
        v55 = cv55;
        v56 = cv56;
        v254 = cv254;
        v256 = cv256;
        
        continue;}}
    }
  const v247 = v54.accountAddress;
  ;
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(djA=)
gtxna 0 ApplicationArgs 2
substring 0 64
app_global_put
byte base64(djE=)
gtxna 0 ApplicationArgs 2
substring 64 128
app_global_put
byte base64(djI=)
gtxna 0 ApplicationArgs 2
substring 128 152
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(djA=)
byte base64()
app_global_put
byte base64(djE=)
byte base64()
app_global_put
byte base64(djI=)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 414
    }, null, null, {
    count: 9,
    size: 647
    }, {
    count: 9,
    size: 638
    }, {
    count: 9,
    size: 686
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:51:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 0 Sender
int 0
itob
concat
int 0
itob
concat
store 253
// check view bs
int 2
itob
gtxn 0 Sender
concat
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
gtxn 0 Sender
concat
load 254
itob
concat
load 253
concat
load 253
dup
concat
load 253
concat
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 88
store 253
dup
substring 88 232
store 252
dup
substring 232 240
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 9
store 250
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:66:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 250
int 0
getbyte
int 0
==
bz l1
int 0
store 245
l1:
load 250
int 0
getbyte
int 1
==
bz l2
load 250
substring 1 9
btoi
dup
store 244
store 245
l2:
l0:
load 245
int 420
%
store 244
load 252
substring 48 96
store 243
load 252
substring 96 144
store 242
load 252
substring 40 48
btoi
load 244
<
bz l3
int 1
itob // bool
substring 7 8
int 1
itob
concat
load 252
substring 0 0
gtxn 0 Sender
load 245
itob
concat
load 244
itob
concat
concat
load 252
substring 48 144
concat
concat
store 241
b l4
l3:
int 0
itob // bool
substring 7 8
int 1
itob
concat
load 252
concat
store 241
l4:
load 241
substring 0 1
btoi
store 240
load 241
substring 1 9
btoi
store 239
load 241
substring 9 153
store 238
load 240
bz l5
load 239
int 1
+
dup
store 236
int 3
<
bz l7
load 240
itob // bool
substring 7 8
load 236
itob
concat
load 238
int 0
int 48
load 236
*
substring3
load 243
concat
load 238
int 48
dup
load 236
*
+
int 144
substring3
concat
concat
store 237
b l8
l7:
load 240
itob // bool
substring 7 8
load 239
itob
concat
load 238
concat
store 237
l8:
b l6
l5:
load 243
substring 40 48
btoi
load 244
<
bz l9
load 239
int 1
+
dup
store 236
int 3
<
bz l11
int 1
itob // bool
substring 7 8
load 236
itob
concat
load 238
int 0
int 48
load 239
*
substring3
gtxn 0 Sender
load 245
itob
concat
load 244
itob
concat
concat
load 238
int 48
dup
load 239
*
+
int 144
substring3
concat
concat
store 237
b l12
l11:
int 1
itob // bool
substring 7 8
load 239
itob
concat
load 238
concat
store 237
l12:
b l10
l9:
int 0
itob // bool
substring 7 8
load 239
int 1
+
itob
concat
load 238
concat
store 237
l10:
l6:
load 237
substring 0 1
btoi
store 236
load 237
substring 1 9
btoi
store 235
load 237
substring 9 153
store 234
load 236
bz l13
load 235
int 1
+
dup
store 232
int 3
<
bz l15
load 236
itob // bool
substring 7 8
load 232
itob
concat
load 234
int 0
int 48
load 232
*
substring3
load 242
concat
load 234
int 48
dup
load 232
*
+
int 144
substring3
concat
concat
store 233
b l16
l15:
load 236
itob // bool
substring 7 8
load 235
itob
concat
load 234
concat
store 233
l16:
b l14
l13:
load 242
substring 40 48
btoi
load 244
<
bz l17
load 235
int 1
+
dup
store 232
int 3
<
bz l19
int 1
itob // bool
substring 7 8
load 232
itob
concat
load 234
int 0
int 48
load 235
*
substring3
gtxn 0 Sender
load 245
itob
concat
load 244
itob
concat
concat
load 234
int 48
dup
load 235
*
+
int 144
substring3
concat
concat
store 233
b l20
l19:
int 1
itob // bool
substring 7 8
load 235
itob
concat
load 234
concat
store 233
l20:
b l18
l17:
int 0
itob // bool
substring 7 8
load 235
int 1
+
itob
concat
load 234
concat
store 233
l18:
l14:
load 233
substring 9 153
store 232
load 233
substring 0 1
btoi
bz l21
// check view bs
int 1
itob
load 232
concat
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
gtxn 0 Sender
concat
load 245
itob
concat
load 244
itob
concat
load 232
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 254
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
b checkAccts
l21:
// check view bs
int 2
itob
load 255
concat
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
gtxn 0 Sender
load 245
itob
concat
load 244
itob
concat
load 244
load 253
substring 40 48
btoi
>
select
concat
load 232
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 254
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 88
store 253
dup
substring 88 232
store 252
dup
substring 232 240
btoi
store 251
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:118:33:dot"
// "[at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
substring 0 32
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=)
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
load 254
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 88
store 253
dup
substring 88 120
store 252
dup
substring 120 128
btoi
store 251
dup
substring 128 136
btoi
store 250
dup
int 136
int 280
substring3
store 249
dup
int 280
int 288
substring3
btoi
store 248
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:111:44:dot"
// "[at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 2
itob
load 255
concat
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
load 252
load 251
itob
concat
load 250
itob
concat
load 250
load 253
substring 40 48
btoi
>
select
concat
load 249
concat
load 248
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 3,
  viewSize: 152
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v56",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v103",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v56",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v102",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v232",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "Leaderboard_leaderboard",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_accountAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_inputValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_returnValue",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2[3]",
        "name": "",
        "type": "tuple[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v56",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v103",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v56",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v54",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v102",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v232",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b6002810460018216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b611ba680620001a76000396000f3fe60806040526004361061004e5760003560e01c806306959c611461005a57806310f48adc1461006f578063282aa64b14610082578063416b9846146100955780637cc31bcf146100a857610055565b3661005557005b600080fd5b61006d61006836600461156b565b6100d3565b005b61006d61007d366004611542565b61023d565b61006d61009036600461157d565b61036c565b61006d6100a3366004611559565b61050a565b3480156100b457600080fd5b506100bd610d3d565b6040516100ca9190611837565b60405180910390f35b6040516100e7906002908390602001611955565b6040516020818303038152906040528051906020012060001c6000541461010d57600080fd5b6000805561012460208201356101c0830135611abd565b43101561013057600080fd5b341561013b57600080fd5b7f539975b9f68930cb0f0bb91eeffb3051a3a9de0ee3e890f6bd9bad317b0ea4378160405161016a91906118e3565b60405180910390a161017a61110a565b6101876020830183611505565b81516001600160a01b03909116905280516020808401359101526101b33683900383016040840161158f565b602080830180519290925290516000910181905260408051606081019091529060a0840190600390835b82821015610209576101fa6060830285013681900381019061158f565b815260200190600101906101dd565b5050506020830180516040019290925250805143606090910152516101e083013560809091015261023981610efe565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461027a57600080fd5b60008055610286611138565b3460208301351461029657600080fd5b805133905280516000602091820181905282516040908101919091528251828401805191909152835181518401528351905182015280518435815284830135928101929092528381013582820152517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a161031761110a565b805133905280516040808501356020928301528351828401805191909152805160019084015284830151815190920191909152805143606090910152519084013560809091015261036781610efe565b505050565b6040516103809060049083906020016119d2565b6040516020818303038152906040528051906020012060001c600054146103a657600080fd5b600080556103b2611158565b34156103bd57600080fd5b6103cd60c0830160a08401611505565b81516001600160a01b039091169052805160e08301356020909101528051610100830135604091820152517f5a3863ef2027c44bf5006e7d396d73f29f3690756ad18e4afc74482a8d251c0790610425908490611916565b60405180910390a161043561110a565b6104426020840184611505565b81516001600160a01b03909116905280516020808501359101526080830135610100840135116104835761047e3684900384016040850161158f565b610486565b81515b6020808301805192909252905160019101526040805160608101909152610120840160036000835b828210156104da576104cb6060830285013681900381019061158f565b815260200190600101906104ae565b50505060208301805160400192909252508051436060909101525161024084013560809091015261036781610efe565b60405161051e906002908390602001611955565b6040516020818303038152906040528051906020012060001c6000541461054457600080fd5b6000805561055061116b565b61056360208301356101c0840135611abd565b431061056e57600080fd5b341561057957600080fd5b600061058d61022084016102008501611528565b60018111156105ac57634e487b7160e01b600052602160045260246000fd5b14156105bb5760008152610604565b60016105cf61022084016102008501611528565b60018111156105ee57634e487b7160e01b600052602160045260246000fd5b1415610604576102408201356020820181905281525b8051610613906101a490611b25565b6040820181905260e083013510156106c95760808101805133905281518151602090810191909152604080840151925181019290925260a080840180516001908190529051909201919091528151606081019092526106b19190840160036000835b828210156106a1576106926060830285013681900381019061158f565b81526020019060010190610675565b5050505060008360800151611011565b60a08201805160400191909152516060820152610739565b60c0810180516000908190529051600160209091015260408051606081019091529060a0840190600390835b82821015610721576107126060830285013681900381019061158f565b815260200190600101906106f5565b50505060c08301805160400192909252505160608201525b6060810151511561080f5760018160600151602001516107599190611abd565b6101008201819052600311156107d35760608101805151610160830180519115159091526101008301805191516020019190915290516040015190516107ba919060a0850160015b606002018036038101906107b5919061158f565b611011565b61016082018051604001919091525160e082015261080a565b6060810180515161018083018051911515909152815160209081015182519091015290516040908101518251909101525160e08201525b610928565b604081015161014083013510156108e35760018160600151602001516108359190611abd565b6101208201819052600311156108ae57610140810180513390528151815160209081019190915260408084015183518201526101a08401805160019052610120850151905183015260608401519081015191015191516108959290611011565b6101a082018051604001919091525160e082015261080a565b6101c08101805160019052606082018051602090810151835190910152516040908101518251909101525160e0820152610928565b6101e08101516000905260608101516020015161090290600190611abd565b6101e0820180516020019190915260608201516040908101518251909101525160e08201525b60e081015151156109eb5760018160e00151602001516109489190611abd565b6102208201819052600311156109ae5760e0810180515161028083018051911515909152610220830180519151602001919091529051604001519051610994919060a0850160026107a1565b6102808201805160400191909152516102008201526109e6565b60e081018051516102a08301805191151590915281516020908101518251909101529051604090810151825190910152516102008201525b610b07565b60408101516101a08301351015610ac15760018160e0015160200151610a119190611abd565b610240820181905260031115610a8b57610260810180513390528151815160209081019190915260408084015183518201526102c08401805160019052610240850151905183015260e0840151908101519101519151610a719290611011565b6102c08201805160400191909152516102008201526109e6565b6102e0810180516001905260e0820180516020908101518351909101525160409081015182519091015251610200820152610b07565b6103008101516000905260e081015160200151610ae090600190611abd565b610300820180516020019190915260e0820151604090810151825190910152516102008201525b6102008101515115610c48577f6b5a5d5d108ea817c273e132e65d8f989aad4d4d2fb85d1ee814467eebccb2b282604051610b429190611874565b60405180910390a1610b5261129a565b61020082015160409081015182526001805551610b7390829060200161193b565b60405160208183030381529060405260029080519060200190610b979291906112ad565b50610ba0611331565b610bad6020850185611505565b6001600160a01b0316815260208085013590820152610bd43685900385016040860161158f565b604080830191909152336060830152436080830152835160a08301528381015160c083015261020084015181015160e08301526101e085013561010083015251610c259060049083906020016119e7565b60408051601f198184030181529190528051602090910120600055506102399050565b6103208101805133905281518151602001526040808301519151810191909152517f6b5a5d5d108ea817c273e132e65d8f989aad4d4d2fb85d1ee814467eebccb2b290610c96908490611874565b60405180910390a1610ca661110a565b610cb36020840184611505565b81516001600160a01b03909116905280516020808501359101526040820151608084013510610cf357610cee3684900384016040850161158f565b610cfa565b8161032001515b602080830180519290925281516001910152610200830151604090810151825190910152805143606090910152516101e084013560809091015261036781610efe565b610d45611390565b600180541415610df957600060028054610d5e90611ad5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8a90611ad5565b8015610dd75780601f10610dac57610100808354040283529160200191610dd7565b820191906000526020600020905b815481529060010190602001808311610dba57829003601f168201915b5050505050806020019051810190610def91906115d4565b519150610efb9050565b6002600154141561005557600060028054610e1390611ad5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3f90611ad5565b8015610e8c5780601f10610e6157610100808354040283529160200191610e8c565b820191906000526020600020905b815481529060010190602001808311610e6f57829003601f168201915b5050505050806020019051810190610ea49190611681565b9050610eae611138565b905181516001600160a01b03909116905280516000602091820181905282516040908101919091528251828401805191909152835181519093019290925291518151909201919091525190505b90565b80602001516020015115610fe7576040805160208082018352600082528351516001600160a01b0316808352600260015583519182015290910160405160208183030381529060405260029080519060200190610f5c9291906112ad565b50610f656113bd565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518101516060808601919091528251015160808086019190915291519091015160a084015251610fc49160029184910161196a565b60408051601f1981840301815291905280516020909101206000555061100e9050565b610fef6113fd565b60208083018051518351525160800151825190910152610239816110af565b50565b611019611390565b60005b60038110156110815784816003811061104557634e487b7160e01b600052603260045260246000fd5b602002015182826003811061106a57634e487b7160e01b600052603260045260246000fd5b60200201528061107981611b0a565b91505061101c565b50818184600381106110a357634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b80518051516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156110f0573d6000803e3d6000fd5b50600080805560018190556111079060029061141d565b33ff5b604080516080810182526000918101828152606082019290925290815260208101611133611459565b905290565b604051806040016040528061114b611480565b8152602001611133611390565b6040518060200160405280611133611480565b6040518061034001604052806000815260200160008152602001600081526020016111946114aa565b81526020016111a1611480565b81526020016111ae6114aa565b81526020016111bb6114aa565b81526020016111c86114aa565b815260200160008152602001600081526020016111e3611480565b81526020016111f06114aa565b81526020016111fd6114aa565b815260200161120a6114aa565b81526020016112176114aa565b81526020016112246114aa565b81526020016112316114aa565b8152602001600081526020016000815260200161124c611480565b81526020016112596114aa565b81526020016112666114aa565b81526020016112736114aa565b81526020016112806114aa565b815260200161128d6114aa565b8152602001611133611480565b6040518060200160405280611133611390565b8280546112b990611ad5565b90600052602060002090601f0160209004810192826112db5760008555611321565b82601f106112f457805160ff1916838001178555611321565b82800160010185558215611321579182015b82811115611321578251825591602001919060010190611306565b5061132d9291506114c9565b5090565b604080516101208101825260008082526020820152908101611351611480565b815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611383611390565b8152602001600081525090565b60405180606001604052806003905b6113a7611480565b81526020019060019003908161139f5790505090565b6040805160c081018252600080825260208201529081016113dc611480565b81526020016113e9611390565b815260200160008152602001600081525090565b60405180604001604052806114106114de565b8152600060209091015290565b50805461142990611ad5565b6000825580601f1061143b575061100e565b601f01602090049060005260206000209081019061100e91906114c9565b6040518060a0016040528061146c611480565b8152600060208201526040016113e9611390565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b6040805160608101825260008082526020820152908101611133611390565b5b8082111561132d57600081556001016114ca565b6040518060400160405280611383611480565b80356002811061150057600080fd5b919050565b600060208284031215611516578081fd5b813561152181611b5b565b9392505050565b600060208284031215611539578081fd5b611521826114f1565b600060608284031215611553578081fd5b50919050565b60006102608284031215611553578081fd5b60006102208284031215611553578081fd5b60006102808284031215611553578081fd5b6000606082840312156115a0578081fd5b6115aa6060611a7e565b82356115b581611b5b565b8152602083810135908201526040928301359281019290925250919050565b60006101208083850312156115e7578182fd5b60206115f281611a7e565b85601f860112611600578384fd5b606061160b81611a7e565b808789878a01111561161b578788fd5b8796505b60038710156116725783818b031215611636578788fd5b61163f84611a7e565b815161164a81611b5b565b815281870151878201526040808301519082015283526001969096019591850191830161161f565b50835250909695505050505050565b600060208284031215611692578081fd5b61169c6020611a7e565b82516116a781611b5b565b81529392505050565b8060005b60038110156116da576116c784836117ea565b60609384019391909101906001016116b4565b50505050565b8060005b60038110156116da576116f8848351611815565b60609390930192602091909101906001016116e4565b803561171981611b5b565b6001600160a01b031682526020818101359083015261173e60408084019083016117ea565b61174e60a0830160a083016116b0565b6101c081810135908301526101e090810135910152565b803561177081611b5b565b6001600160a01b0381811684526020838101359085015261179760408086019085016117ea565b60a083013591506117a782611b5b565b1660a083015260c0818101359083015260e0808201359083015261010080820135908301526101206117dd8184018284016116b0565b5061024090810135910152565b80356117f581611b5b565b6001600160a01b0316825260208181013590830152604090810135910152565b80516001600160a01b0316825260208082015190830152604090810151910152565b6101208101818360005b600381101561186b57611855838351611815565b6060929092019160209190910190600101611841565b50505092915050565b6102608101611883828461170e565b6102006118918185016114f1565b600281106118af57634e487b7160e01b600052602160045260246000fd5b90830152610220838101358015158082146118c957600080fd5b808386015250505061024080840135818401525092915050565b61022081016118f2828461170e565b6102008084013580151580821461190857600080fd5b808386015250505092915050565b61028081016119258284611765565b6102608084013580151580821461190857600080fd5b60006101208201905061194f8284516116e0565b92915050565b8281526102208101611521602083018461170e565b60006102208201905083825260018060a01b0383511660208301526020830151604083015260408301516119a16060840182611815565b5060608301516119b460c08401826116e0565b5060808301516101e083015260a08301516102008301529392505050565b82815261028081016115216020830184611765565b60006102808201905083825260018060a01b038351166020830152602083015160408301526040830151611a1e6060840182611815565b5060608301516001600160a01b03811660c084015250608083015160e083015260a0830151610100818185015260c085015161012085015260e08501519150611a6b6101408501836116e0565b8085015161026085015250509392505050565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ab557634e487b7160e01b600052604160045260246000fd5b604052919050565b60008219821115611ad057611ad0611b45565b500190565b600281046001821680611ae957607f821691505b6020821081141561155357634e487b7160e01b600052602260045260246000fd5b6000600019821415611b1e57611b1e611b45565b5060010190565b600082611b4057634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461100e57600080fdfea26469706673582212207e0c0a8005277a550546a08a7e492bea166d00aef1a72472a96d0bb95cf72b0564736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    Leaderboard: {
      leaderboard: `Leaderboard_leaderboard`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

