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
              const [v235] = svs;
              return (((() => {
                
                
                return v235;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v27] = svs;
              return (((() => {
                
                const v52 = {
                  accountAddress: v27,
                  inputValue: stdlib.checkedBigNumberify('./index.rsh:66:29:decimal', stdlib.UInt_max, 0),
                  returnValue: stdlib.checkedBigNumberify('./index.rsh:65:30:decimal', stdlib.UInt_max, 0)
                  };
                const v55 = [v52, v52, v52];
                
                return v55;}))(...args));
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
    at: './index.rsh:60:38:application',
    fs: ['at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:35:function exp)'],
    msg: 'informBounty',
    who: 'Contestant'
    });
  
  const v60 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0)
    };
  const v64 = [v60, v60, v60];
  let v57 = v60;
  let v58 = true;
  let v59 = v64;
  let v257 = v32;
  let v259 = v28;
  
  while ((() => {
    
    return v58;})()) {
    const v91 = stdlib.protect(ctc2, await interact.submitValue(), {
      at: './index.rsh:77:74:application',
      fs: ['at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:76:29:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
      msg: 'submitValue',
      who: 'Contestant'
      });
    let v93;
    switch (v91[0]) {
      case 'None': {
        
        v93 = false;
        
        break;
        }
      case 'Some': {
        const v97 = v91[1];
        v93 = true;
        
        break;
        }
      }
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc6, ctc0, ctc0, ctc2], [v27, v29, v57, v59, v257, v259, v91], [stdlib.checkedBigNumberify('./index.rsh:74:26:decimal', stdlib.UInt_max, 0), []], [ctc2], v93, false, v29, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
      const [v106] = txn2.data;
      const v110 = txn2.time;
      const v105 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:74:26:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      let v118;
      switch (v106[0]) {
        case 'None': {
          
          v118 = stdlib.checkedBigNumberify('./index.rsh:86:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v122 = v106[1];
          v118 = v122;
          
          break;
          }
        }
      const v129 = stdlib.mod(v118, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 42));
      const v163 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 0)];
      const v164 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 1)];
      const v165 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 2)];
      let v166;
      const v167 = v163.returnValue;
      const v168 = stdlib.lt(v167, v129);
      if (v168) {
        const v169 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v170 = stdlib.Array_set(v59, stdlib.checkedBigNumberify('./index.rsh:94:95:decimal', stdlib.UInt_max, 0), v169);
        const v173 = [true, stdlib.checkedBigNumberify('./index.rsh:104:65:decimal', stdlib.UInt_max, 1), v170];
        v166 = v173;
        }
      else {
        const v174 = [false, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1), v59];
        v166 = v174;
        }
      const v176 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v177 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v178 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v175;
      if (v176) {
        const v179 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v180 = stdlib.lt(v179, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v180) {
          const v184 = stdlib.Array_set(v178, v179, v164);
          const v199 = [v176, v179, v184];
          v175 = v199;
          }
        else {
          const v200 = [v176, v177, v178];
          v175 = v200;
          }
        }
      else {
        const v187 = v164.returnValue;
        const v188 = stdlib.lt(v187, v129);
        if (v188) {
          const v189 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v190 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v190) {
            const v192 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v194 = stdlib.Array_set(v178, v177, v192);
            const v201 = [true, v189, v194];
            v175 = v201;
            }
          else {
            const v202 = [true, v177, v178];
            v175 = v202;
            }
          }
        else {
          const v197 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v203 = [false, v197, v178];
          v175 = v203;
          }
        }
      const v205 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v206 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v207 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v204;
      if (v205) {
        const v208 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v209 = stdlib.lt(v208, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v209) {
          const v213 = stdlib.Array_set(v207, v208, v165);
          const v228 = [v205, v208, v213];
          v204 = v228;
          }
        else {
          const v229 = [v205, v206, v207];
          v204 = v229;
          }
        }
      else {
        const v216 = v165.returnValue;
        const v217 = stdlib.lt(v216, v129);
        if (v217) {
          const v218 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v219 = stdlib.lt(v218, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v219) {
            const v221 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v223 = stdlib.Array_set(v207, v206, v221);
            const v230 = [true, v218, v223];
            v204 = v230;
            }
          else {
            const v231 = [true, v206, v207];
            v204 = v231;
            }
          }
        else {
          const v226 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v232 = [false, v226, v207];
          v204 = v232;
          }
        }
      const v233 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 0)];
      const v235 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 2)];
      if (v233) {
        sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:115:41:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v29, v57, v105, v110, v118, v129, v235, v259]);
        sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:115:41:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v29, v57, v105, v118, v129, v235, v259]);
        sim_r.view = [ctc12, [stdlib.checkedBigNumberify('./index.rsh:115:41:after expr stmt semicolon', stdlib.UInt_max, 1), v235]];
        sim_r.isHalt = false;
        }
      else {
        const v239 = v57.returnValue;
        const v240 = stdlib.gt(v129, v239);
        const v241 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v242 = v240 ? v241 : v57;
        const cv57 = v242;
        const cv58 = true;
        const cv59 = v235;
        const cv257 = v110;
        const cv259 = v259;
        
        (() => {
          const v57 = cv57;
          const v58 = cv58;
          const v59 = cv59;
          const v257 = cv257;
          const v259 = cv259;
          
          if ((() => {
            
            return v58;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v250 = v57.accountAddress;
            sim_r.txns.push({
              amt: v259,
              kind: 'from',
              to: v250,
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
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc6, ctc0, ctc0], [v27, v29, v57, v59, v257, v259], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
        const [] = txn3.data;
        const v247 = txn3.time;
        const v245 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv57 = v57;
        const cv58 = false;
        const cv59 = v59;
        const cv257 = v247;
        const cv259 = v259;
        
        (() => {
          const v57 = cv57;
          const v58 = cv58;
          const v59 = cv59;
          const v257 = cv257;
          const v259 = cv259;
          
          if ((() => {
            
            return v58;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v250 = v57.accountAddress;
            sim_r.txns.push({
              amt: v259,
              kind: 'from',
              to: v250,
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
      const v247 = txn3.time;
      const v245 = txn3.from;
      ;
      const cv57 = v57;
      const cv58 = false;
      const cv59 = v59;
      const cv257 = v247;
      const cv259 = v259;
      
      v57 = cv57;
      v58 = cv58;
      v59 = cv59;
      v257 = cv257;
      v259 = cv259;
      
      continue;
      }
    else {
      const [v106] = txn2.data;
      const v110 = txn2.time;
      const v105 = txn2.from;
      ;
      stdlib.protect(ctc1, await interact.informSuccess(true), {
        at: './index.rsh:85:73:application',
        fs: ['at ./index.rsh:85:44:application call to [unknown function] (defined at: ./index.rsh:85:48:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
        msg: 'informSuccess',
        who: 'Contestant'
        });
      
      let v118;
      switch (v106[0]) {
        case 'None': {
          
          v118 = stdlib.checkedBigNumberify('./index.rsh:86:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v122 = v106[1];
          v118 = v122;
          
          break;
          }
        }
      const v129 = stdlib.mod(v118, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 42));
      const v163 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 0)];
      const v164 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 1)];
      const v165 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 2)];
      let v166;
      const v167 = v163.returnValue;
      const v168 = stdlib.lt(v167, v129);
      if (v168) {
        const v169 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v170 = stdlib.Array_set(v59, stdlib.checkedBigNumberify('./index.rsh:94:95:decimal', stdlib.UInt_max, 0), v169);
        const v173 = [true, stdlib.checkedBigNumberify('./index.rsh:104:65:decimal', stdlib.UInt_max, 1), v170];
        v166 = v173;
        }
      else {
        const v174 = [false, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1), v59];
        v166 = v174;
        }
      const v176 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v177 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v178 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v175;
      if (v176) {
        const v179 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v180 = stdlib.lt(v179, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v180) {
          const v184 = stdlib.Array_set(v178, v179, v164);
          const v199 = [v176, v179, v184];
          v175 = v199;
          }
        else {
          const v200 = [v176, v177, v178];
          v175 = v200;
          }
        }
      else {
        const v187 = v164.returnValue;
        const v188 = stdlib.lt(v187, v129);
        if (v188) {
          const v189 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v190 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v190) {
            const v192 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v194 = stdlib.Array_set(v178, v177, v192);
            const v201 = [true, v189, v194];
            v175 = v201;
            }
          else {
            const v202 = [true, v177, v178];
            v175 = v202;
            }
          }
        else {
          const v197 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v203 = [false, v197, v178];
          v175 = v203;
          }
        }
      const v205 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v206 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v207 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v204;
      if (v205) {
        const v208 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v209 = stdlib.lt(v208, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v209) {
          const v213 = stdlib.Array_set(v207, v208, v165);
          const v228 = [v205, v208, v213];
          v204 = v228;
          }
        else {
          const v229 = [v205, v206, v207];
          v204 = v229;
          }
        }
      else {
        const v216 = v165.returnValue;
        const v217 = stdlib.lt(v216, v129);
        if (v217) {
          const v218 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v219 = stdlib.lt(v218, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v219) {
            const v221 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v223 = stdlib.Array_set(v207, v206, v221);
            const v230 = [true, v218, v223];
            v204 = v230;
            }
          else {
            const v231 = [true, v206, v207];
            v204 = v231;
            }
          }
        else {
          const v226 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v232 = [false, v226, v207];
          v204 = v232;
          }
        }
      const v233 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 0)];
      const v235 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 2)];
      if (v233) {
        const txn3 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:116:44:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc5, ctc3, ctc0, ctc0, ctc0, ctc6, ctc0], [v27, v29, v57, v105, v110, v118, v129, v235, v259], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:116:44:dot', stdlib.UInt_max, 4), v27, v29, v57, v105, v110, v118, v129, v235, v259]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:116:44:dot', stdlib.UInt_max, 4), v27, v29, v57, v105, v118, v129, v235, v259]);
          const [] = txn3.data;
          const v238 = txn3.time;
          const v236 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v239 = v57.returnValue;
          const v240 = stdlib.gt(v129, v239);
          const v241 = {
            accountAddress: v105,
            inputValue: v118,
            returnValue: v129
            };
          const v242 = v240 ? v241 : v57;
          const cv57 = v242;
          const cv58 = true;
          const cv59 = v235;
          const cv257 = v238;
          const cv259 = v259;
          
          (() => {
            const v57 = cv57;
            const v58 = cv58;
            const v59 = cv59;
            const v257 = cv257;
            const v259 = cv259;
            
            if ((() => {
              
              return v58;})()) {
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
              sim_r.isHalt = false;
              }
            else {
              const v250 = v57.accountAddress;
              sim_r.txns.push({
                amt: v259,
                kind: 'from',
                to: v250,
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
        const v238 = txn3.time;
        const v236 = txn3.from;
        ;
        const v239 = v57.returnValue;
        const v240 = stdlib.gt(v129, v239);
        const v241 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v242 = v240 ? v241 : v57;
        const cv57 = v242;
        const cv58 = true;
        const cv59 = v235;
        const cv257 = v238;
        const cv259 = v259;
        
        v57 = cv57;
        v58 = cv58;
        v59 = cv59;
        v257 = cv257;
        v259 = cv259;
        
        continue;
        }
      else {
        const v239 = v57.returnValue;
        const v240 = stdlib.gt(v129, v239);
        const v241 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v242 = v240 ? v241 : v57;
        const cv57 = v242;
        const cv58 = true;
        const cv59 = v235;
        const cv257 = v110;
        const cv259 = v259;
        
        v57 = cv57;
        v58 = cv58;
        v59 = cv59;
        v257 = cv257;
        v259 = cv259;
        
        continue;}}
    }
  const v250 = v57.accountAddress;
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
    at: './index.rsh:48:72:application',
    fs: ['at ./index.rsh:47:24:application call to [unknown function] (defined at: ./index.rsh:47:28:function exp)'],
    msg: 'getBounty',
    who: 'Funder'
    });
  const v25 = v24.amt;
  const v26 = v24.deadline;
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v20, v25, v26], [v25, []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0)]);
    const [v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v27 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    
    const v60 = {
      accountAddress: v27,
      inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
      returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0)
      };
    const v64 = [v60, v60, v60];
    const v57 = v60;
    const v58 = true;
    const v59 = v64;
    const v257 = v32;
    const v259 = v28;
    
    if ((() => {
      
      return v58;})()) {
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
      sim_r.isHalt = false;
      }
    else {
      const v250 = v57.accountAddress;
      sim_r.txns.push({
        amt: v259,
        kind: 'from',
        to: v250,
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
  stdlib.protect(ctc2, await interact.postWager(), {
    at: './index.rsh:56:35:application',
    fs: ['at ./index.rsh:55:24:application call to [unknown function] (defined at: ./index.rsh:55:28:function exp)'],
    msg: 'postWager',
    who: 'Funder'
    });
  
  const v60 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0)
    };
  const v64 = [v60, v60, v60];
  let v57 = v60;
  let v58 = true;
  let v59 = v64;
  let v257 = v32;
  let v259 = v28;
  
  while ((() => {
    
    return v58;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc3], false, v29));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc6, ctc7, ctc0, ctc0], [v27, v29, v57, v59, v257, v259], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:123:33:dot', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
        const [] = txn3.data;
        const v247 = txn3.time;
        const v245 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv57 = v57;
        const cv58 = false;
        const cv59 = v59;
        const cv257 = v247;
        const cv259 = v259;
        
        (() => {
          const v57 = cv57;
          const v58 = cv58;
          const v59 = cv59;
          const v257 = cv257;
          const v259 = cv259;
          
          if ((() => {
            
            return v58;})()) {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v257, v259]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v29, v57, v59, v259]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v27]];
            sim_r.isHalt = false;
            }
          else {
            const v250 = v57.accountAddress;
            sim_r.txns.push({
              amt: v259,
              kind: 'from',
              to: v250,
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
      const v247 = txn3.time;
      const v245 = txn3.from;
      ;
      const cv57 = v57;
      const cv58 = false;
      const cv59 = v59;
      const cv257 = v247;
      const cv259 = v259;
      
      v57 = cv57;
      v58 = cv58;
      v59 = cv59;
      v257 = cv257;
      v259 = cv259;
      
      continue;
      }
    else {
      const [v106] = txn2.data;
      const v110 = txn2.time;
      const v105 = txn2.from;
      ;
      let v118;
      switch (v106[0]) {
        case 'None': {
          
          v118 = stdlib.checkedBigNumberify('./index.rsh:86:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v122 = v106[1];
          v118 = v122;
          
          break;
          }
        }
      const v129 = stdlib.mod(v118, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 42));
      const v163 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 0)];
      const v164 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 1)];
      const v165 = v59[stdlib.checkedBigNumberify('./index.rsh:94:86:application', stdlib.UInt_max, 2)];
      let v166;
      const v167 = v163.returnValue;
      const v168 = stdlib.lt(v167, v129);
      if (v168) {
        const v169 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v170 = stdlib.Array_set(v59, stdlib.checkedBigNumberify('./index.rsh:94:95:decimal', stdlib.UInt_max, 0), v169);
        const v173 = [true, stdlib.checkedBigNumberify('./index.rsh:104:65:decimal', stdlib.UInt_max, 1), v170];
        v166 = v173;
        }
      else {
        const v174 = [false, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1), v59];
        v166 = v174;
        }
      const v176 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v177 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v178 = v166[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v175;
      if (v176) {
        const v179 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v180 = stdlib.lt(v179, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v180) {
          const v184 = stdlib.Array_set(v178, v179, v164);
          const v199 = [v176, v179, v184];
          v175 = v199;
          }
        else {
          const v200 = [v176, v177, v178];
          v175 = v200;
          }
        }
      else {
        const v187 = v164.returnValue;
        const v188 = stdlib.lt(v187, v129);
        if (v188) {
          const v189 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v190 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v190) {
            const v192 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v194 = stdlib.Array_set(v178, v177, v192);
            const v201 = [true, v189, v194];
            v175 = v201;
            }
          else {
            const v202 = [true, v177, v178];
            v175 = v202;
            }
          }
        else {
          const v197 = stdlib.add(v177, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v203 = [false, v197, v178];
          v175 = v203;
          }
        }
      const v205 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 0)];
      const v206 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 1)];
      const v207 = v175[stdlib.checkedBigNumberify('./index.rsh:94:113:array', stdlib.UInt_max, 2)];
      let v204;
      if (v205) {
        const v208 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:96:47:decimal', stdlib.UInt_max, 1));
        const v209 = stdlib.lt(v208, stdlib.checkedBigNumberify('./index.rsh:96:58:dot', stdlib.UInt_max, 3));
        if (v209) {
          const v213 = stdlib.Array_set(v207, v208, v165);
          const v228 = [v205, v208, v213];
          v204 = v228;
          }
        else {
          const v229 = [v205, v206, v207];
          v204 = v229;
          }
        }
      else {
        const v216 = v165.returnValue;
        const v217 = stdlib.lt(v216, v129);
        if (v217) {
          const v218 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:103:51:decimal', stdlib.UInt_max, 1));
          const v219 = stdlib.lt(v218, stdlib.checkedBigNumberify('./index.rsh:103:62:dot', stdlib.UInt_max, 3));
          if (v219) {
            const v221 = {
              accountAddress: v105,
              inputValue: v118,
              returnValue: v129
              };
            const v223 = stdlib.Array_set(v207, v206, v221);
            const v230 = [true, v218, v223];
            v204 = v230;
            }
          else {
            const v231 = [true, v206, v207];
            v204 = v231;
            }
          }
        else {
          const v226 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:109:62:decimal', stdlib.UInt_max, 1));
          const v232 = [false, v226, v207];
          v204 = v232;
          }
        }
      const v233 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 0)];
      const v235 = v204[stdlib.checkedBigNumberify('./index.rsh:94:35:array', stdlib.UInt_max, 2)];
      if (v233) {
        const txn3 = await (ctc.recv(6, 0, [], false, false));
        const [] = txn3.data;
        const v238 = txn3.time;
        const v236 = txn3.from;
        ;
        const v239 = v57.returnValue;
        const v240 = stdlib.gt(v129, v239);
        const v241 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v242 = v240 ? v241 : v57;
        const cv57 = v242;
        const cv58 = true;
        const cv59 = v235;
        const cv257 = v238;
        const cv259 = v259;
        
        v57 = cv57;
        v58 = cv58;
        v59 = cv59;
        v257 = cv257;
        v259 = cv259;
        
        continue;
        }
      else {
        const v239 = v57.returnValue;
        const v240 = stdlib.gt(v129, v239);
        const v241 = {
          accountAddress: v105,
          inputValue: v118,
          returnValue: v129
          };
        const v242 = v240 ? v241 : v57;
        const cv57 = v242;
        const cv58 = true;
        const cv59 = v235;
        const cv257 = v110;
        const cv259 = v259;
        
        v57 = cv57;
        v58 = cv58;
        v59 = cv59;
        v257 = cv257;
        v259 = cv259;
        
        continue;}}
    }
  const v250 = v57.accountAddress;
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
// "./index.rsh:52:20:dot"
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
// "./index.rsh:71:31:dot"
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
int 42
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
// "./index.rsh:123:33:dot"
// "[at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)]"
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
// "./index.rsh:116:44:dot"
// "[at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)]"
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
                "name": "v57",
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
                "name": "v59",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
                "name": "v106",
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
                "name": "v57",
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
                "name": "v59",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
                "name": "v57",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
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
                "name": "v235",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
                "name": "v57",
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
                "name": "v59",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
                "name": "v106",
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
                "name": "v57",
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
                "name": "v59",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
                "name": "v57",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
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
                "name": "v235",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v259",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b6002810460018216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b611ba580620001a76000396000f3fe60806040526004361061004e5760003560e01c806306959c611461005a57806310f48adc1461006f578063282aa64b14610082578063416b9846146100955780637cc31bcf146100a857610055565b3661005557005b600080fd5b61006d61006836600461156a565b6100d3565b005b61006d61007d366004611541565b61023d565b61006d61009036600461157c565b61036c565b61006d6100a3366004611558565b61050a565b3480156100b457600080fd5b506100bd610d3c565b6040516100ca9190611836565b60405180910390f35b6040516100e7906002908390602001611954565b6040516020818303038152906040528051906020012060001c6000541461010d57600080fd5b6000805561012460208201356101c0830135611abc565b43101561013057600080fd5b341561013b57600080fd5b7f539975b9f68930cb0f0bb91eeffb3051a3a9de0ee3e890f6bd9bad317b0ea4378160405161016a91906118e2565b60405180910390a161017a611109565b6101876020830183611504565b81516001600160a01b03909116905280516020808401359101526101b33683900383016040840161158e565b602080830180519290925290516000910181905260408051606081019091529060a0840190600390835b82821015610209576101fa6060830285013681900381019061158e565b815260200190600101906101dd565b5050506020830180516040019290925250805143606090910152516101e083013560809091015261023981610efd565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461027a57600080fd5b60008055610286611137565b3460208301351461029657600080fd5b805133905280516000602091820181905282516040908101919091528251828401805191909152835181518401528351905182015280518435815284830135928101929092528381013582820152517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a1610317611109565b805133905280516040808501356020928301528351828401805191909152805160019084015284830151815190920191909152805143606090910152519084013560809091015261036781610efd565b505050565b6040516103809060049083906020016119d1565b6040516020818303038152906040528051906020012060001c600054146103a657600080fd5b600080556103b2611157565b34156103bd57600080fd5b6103cd60c0830160a08401611504565b81516001600160a01b039091169052805160e08301356020909101528051610100830135604091820152517f5a3863ef2027c44bf5006e7d396d73f29f3690756ad18e4afc74482a8d251c0790610425908490611915565b60405180910390a1610435611109565b6104426020840184611504565b81516001600160a01b03909116905280516020808501359101526080830135610100840135116104835761047e3684900384016040850161158e565b610486565b81515b6020808301805192909252905160019101526040805160608101909152610120840160036000835b828210156104da576104cb6060830285013681900381019061158e565b815260200190600101906104ae565b50505060208301805160400192909252508051436060909101525161024084013560809091015261036781610efd565b60405161051e906002908390602001611954565b6040516020818303038152906040528051906020012060001c6000541461054457600080fd5b6000805561055061116a565b61056360208301356101c0840135611abc565b431061056e57600080fd5b341561057957600080fd5b600061058d61022084016102008501611527565b60018111156105ac57634e487b7160e01b600052602160045260246000fd5b14156105bb5760008152610604565b60016105cf61022084016102008501611527565b60018111156105ee57634e487b7160e01b600052602160045260246000fd5b1415610604576102408201356020820181905281525b805161061290602a90611b24565b6040820181905260e083013510156106c85760808101805133905281518151602090810191909152604080840151925181019290925260a080840180516001908190529051909201919091528151606081019092526106b09190840160036000835b828210156106a0576106916060830285013681900381019061158e565b81526020019060010190610674565b5050505060008360800151611010565b60a08201805160400191909152516060820152610738565b60c0810180516000908190529051600160209091015260408051606081019091529060a0840190600390835b82821015610720576107116060830285013681900381019061158e565b815260200190600101906106f4565b50505060c08301805160400192909252505160608201525b6060810151511561080e5760018160600151602001516107589190611abc565b6101008201819052600311156107d25760608101805151610160830180519115159091526101008301805191516020019190915290516040015190516107b9919060a0850160015b606002018036038101906107b4919061158e565b611010565b61016082018051604001919091525160e0820152610809565b6060810180515161018083018051911515909152815160209081015182519091015290516040908101518251909101525160e08201525b610927565b604081015161014083013510156108e25760018160600151602001516108349190611abc565b6101208201819052600311156108ad57610140810180513390528151815160209081019190915260408084015183518201526101a08401805160019052610120850151905183015260608401519081015191015191516108949290611010565b6101a082018051604001919091525160e0820152610809565b6101c08101805160019052606082018051602090810151835190910152516040908101518251909101525160e0820152610927565b6101e08101516000905260608101516020015161090190600190611abc565b6101e0820180516020019190915260608201516040908101518251909101525160e08201525b60e081015151156109ea5760018160e00151602001516109479190611abc565b6102208201819052600311156109ad5760e0810180515161028083018051911515909152610220830180519151602001919091529051604001519051610993919060a0850160026107a0565b6102808201805160400191909152516102008201526109e5565b60e081018051516102a08301805191151590915281516020908101518251909101529051604090810151825190910152516102008201525b610b06565b60408101516101a08301351015610ac05760018160e0015160200151610a109190611abc565b610240820181905260031115610a8a57610260810180513390528151815160209081019190915260408084015183518201526102c08401805160019052610240850151905183015260e0840151908101519101519151610a709290611010565b6102c08201805160400191909152516102008201526109e5565b6102e0810180516001905260e0820180516020908101518351909101525160409081015182519091015251610200820152610b06565b6103008101516000905260e081015160200151610adf90600190611abc565b610300820180516020019190915260e0820151604090810151825190910152516102008201525b6102008101515115610c47577f6b5a5d5d108ea817c273e132e65d8f989aad4d4d2fb85d1ee814467eebccb2b282604051610b419190611873565b60405180910390a1610b51611299565b61020082015160409081015182526001805551610b7290829060200161193a565b60405160208183030381529060405260029080519060200190610b969291906112ac565b50610b9f611330565b610bac6020850185611504565b6001600160a01b0316815260208085013590820152610bd33685900385016040860161158e565b604080830191909152336060830152436080830152835160a08301528381015160c083015261020084015181015160e08301526101e085013561010083015251610c249060049083906020016119e6565b60408051601f198184030181529190528051602090910120600055506102399050565b6103208101805133905281518151602001526040808301519151810191909152517f6b5a5d5d108ea817c273e132e65d8f989aad4d4d2fb85d1ee814467eebccb2b290610c95908490611873565b60405180910390a1610ca5611109565b610cb26020840184611504565b81516001600160a01b03909116905280516020808501359101526040820151608084013510610cf257610ced3684900384016040850161158e565b610cf9565b8161032001515b602080830180519290925281516001910152610200830151604090810151825190910152805143606090910152516101e084013560809091015261036781610efd565b610d4461138f565b600180541415610df857600060028054610d5d90611ad4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8990611ad4565b8015610dd65780601f10610dab57610100808354040283529160200191610dd6565b820191906000526020600020905b815481529060010190602001808311610db957829003601f168201915b5050505050806020019051810190610dee91906115d3565b519150610efa9050565b6002600154141561005557600060028054610e1290611ad4565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3e90611ad4565b8015610e8b5780601f10610e6057610100808354040283529160200191610e8b565b820191906000526020600020905b815481529060010190602001808311610e6e57829003601f168201915b5050505050806020019051810190610ea39190611680565b9050610ead611137565b905181516001600160a01b03909116905280516000602091820181905282516040908101919091528251828401805191909152835181519093019290925291518151909201919091525190505b90565b80602001516020015115610fe6576040805160208082018352600082528351516001600160a01b0316808352600260015583519182015290910160405160208183030381529060405260029080519060200190610f5b9291906112ac565b50610f646113bc565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518101516060808601919091528251015160808086019190915291519091015160a084015251610fc391600291849101611969565b60408051601f1981840301815291905280516020909101206000555061100d9050565b610fee6113fc565b60208083018051518351525160800151825190910152610239816110ae565b50565b61101861138f565b60005b60038110156110805784816003811061104457634e487b7160e01b600052603260045260246000fd5b602002015182826003811061106957634e487b7160e01b600052603260045260246000fd5b60200201528061107881611b09565b91505061101b565b50818184600381106110a257634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b80518051516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156110ef573d6000803e3d6000fd5b50600080805560018190556111069060029061141c565b33ff5b604080516080810182526000918101828152606082019290925290815260208101611132611458565b905290565b604051806040016040528061114a61147f565b815260200161113261138f565b604051806020016040528061113261147f565b6040518061034001604052806000815260200160008152602001600081526020016111936114a9565b81526020016111a061147f565b81526020016111ad6114a9565b81526020016111ba6114a9565b81526020016111c76114a9565b815260200160008152602001600081526020016111e261147f565b81526020016111ef6114a9565b81526020016111fc6114a9565b81526020016112096114a9565b81526020016112166114a9565b81526020016112236114a9565b81526020016112306114a9565b8152602001600081526020016000815260200161124b61147f565b81526020016112586114a9565b81526020016112656114a9565b81526020016112726114a9565b815260200161127f6114a9565b815260200161128c6114a9565b815260200161113261147f565b604051806020016040528061113261138f565b8280546112b890611ad4565b90600052602060002090601f0160209004810192826112da5760008555611320565b82601f106112f357805160ff1916838001178555611320565b82800160010185558215611320579182015b82811115611320578251825591602001919060010190611305565b5061132c9291506114c8565b5090565b60408051610120810182526000808252602082015290810161135061147f565b815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161138261138f565b8152602001600081525090565b60405180606001604052806003905b6113a661147f565b81526020019060019003908161139e5790505090565b6040805160c081018252600080825260208201529081016113db61147f565b81526020016113e861138f565b815260200160008152602001600081525090565b604051806040016040528061140f6114dd565b8152600060209091015290565b50805461142890611ad4565b6000825580601f1061143a575061100d565b601f01602090049060005260206000209081019061100d91906114c8565b6040518060a0016040528061146b61147f565b8152600060208201526040016113e861138f565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604080516060810182526000808252602082015290810161113261138f565b5b8082111561132c57600081556001016114c9565b604051806040016040528061138261147f565b8035600281106114ff57600080fd5b919050565b600060208284031215611515578081fd5b813561152081611b5a565b9392505050565b600060208284031215611538578081fd5b611520826114f0565b600060608284031215611552578081fd5b50919050565b60006102608284031215611552578081fd5b60006102208284031215611552578081fd5b60006102808284031215611552578081fd5b60006060828403121561159f578081fd5b6115a96060611a7d565b82356115b481611b5a565b8152602083810135908201526040928301359281019290925250919050565b60006101208083850312156115e6578182fd5b60206115f181611a7d565b85601f8601126115ff578384fd5b606061160a81611a7d565b808789878a01111561161a578788fd5b8796505b60038710156116715783818b031215611635578788fd5b61163e84611a7d565b815161164981611b5a565b815281870151878201526040808301519082015283526001969096019591850191830161161e565b50835250909695505050505050565b600060208284031215611691578081fd5b61169b6020611a7d565b82516116a681611b5a565b81529392505050565b8060005b60038110156116d9576116c684836117e9565b60609384019391909101906001016116b3565b50505050565b8060005b60038110156116d9576116f7848351611814565b60609390930192602091909101906001016116e3565b803561171881611b5a565b6001600160a01b031682526020818101359083015261173d60408084019083016117e9565b61174d60a0830160a083016116af565b6101c081810135908301526101e090810135910152565b803561176f81611b5a565b6001600160a01b0381811684526020838101359085015261179660408086019085016117e9565b60a083013591506117a682611b5a565b1660a083015260c0818101359083015260e0808201359083015261010080820135908301526101206117dc8184018284016116af565b5061024090810135910152565b80356117f481611b5a565b6001600160a01b0316825260208181013590830152604090810135910152565b80516001600160a01b0316825260208082015190830152604090810151910152565b6101208101818360005b600381101561186a57611854838351611814565b6060929092019160209190910190600101611840565b50505092915050565b6102608101611882828461170d565b6102006118908185016114f0565b600281106118ae57634e487b7160e01b600052602160045260246000fd5b90830152610220838101358015158082146118c857600080fd5b808386015250505061024080840135818401525092915050565b61022081016118f1828461170d565b6102008084013580151580821461190757600080fd5b808386015250505092915050565b61028081016119248284611764565b6102608084013580151580821461190757600080fd5b60006101208201905061194e8284516116df565b92915050565b8281526102208101611520602083018461170d565b60006102208201905083825260018060a01b0383511660208301526020830151604083015260408301516119a06060840182611814565b5060608301516119b360c08401826116df565b5060808301516101e083015260a08301516102008301529392505050565b82815261028081016115206020830184611764565b60006102808201905083825260018060a01b038351166020830152602083015160408301526040830151611a1d6060840182611814565b5060608301516001600160a01b03811660c084015250608083015160e083015260a0830151610100818185015260c085015161012085015260e08501519150611a6a6101408501836116df565b8085015161026085015250509392505050565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ab457634e487b7160e01b600052604160045260246000fd5b604052919050565b60008219821115611acf57611acf611b44565b500190565b600281046001821680611ae857607f821691505b6020821081141561155257634e487b7160e01b600052602260045260246000fd5b6000600019821415611b1d57611b1d611b44565b5060010190565b600082611b3f57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461100d57600080fdfea26469706673582212201c76d13f5a8498a4f4f3ec61c8c2b44cff1558521885c08bd084433b6ddece9164736f6c63430008020033`,
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

