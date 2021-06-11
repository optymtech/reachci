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
  return {
    infos: {
      },
    views: {
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
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    accountAddress: ctc4,
    inputValue: ctc0,
    returnValue: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.informBounty(v28, v29), {
    at: './index.rsh:63:38:application',
    fs: ['at ./index.rsh:62:17:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
    msg: 'informBounty',
    who: 'Contestant'
    });
  
  const v43 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v41 = v43;
  let v42 = true;
  let v142 = v32;
  let v144 = v28;
  
  while ((() => {
    
    return v42;})()) {
    const v70 = stdlib.protect(ctc2, await interact.submitValue(), {
      at: './index.rsh:80:74:application',
      fs: ['at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:79:29:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
      msg: 'submitValue',
      who: 'Contestant'
      });
    let v72;
    switch (v70[0]) {
      case 'None': {
        
        v72 = false;
        
        break;
        }
      case 'Some': {
        const v76 = v70[1];
        v72 = true;
        
        break;
        }
      }
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:74:31:dot', stdlib.UInt_max, 2), [ctc0, ctc5, ctc0, ctc0, ctc2], [v29, v41, v142, v144, v70], [stdlib.checkedBigNumberify('./index.rsh:77:26:decimal', stdlib.UInt_max, 0), []], [ctc2], v72, false, v29, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:74:31:dot', stdlib.UInt_max, 2), v29, v41, v142, v144]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:dot', stdlib.UInt_max, 2), v29, v41, v144]);
      const [v85] = txn2.data;
      const v89 = txn2.time;
      const v84 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:77:26:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      let v93;
      switch (v85[0]) {
        case 'None': {
          
          v93 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v97 = v85[1];
          v93 = v97;
          
          break;
          }
        }
      const v104 = stdlib.mod(v93, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 101));
      const v110 = v41.returnValue;
      const v111 = stdlib.gt(v104, v110);
      const v112 = {
        accountAddress: v84,
        inputValue: v93,
        returnValue: v104
        };
      const v113 = v111 ? v112 : v41;
      
      const cv41 = v113;
      const cv42 = true;
      const cv142 = v89;
      const cv144 = v144;
      
      (() => {
        const v41 = cv41;
        const v42 = cv42;
        const v142 = cv142;
        const v144 = cv144;
        
        if ((() => {
          
          return v42;})()) {
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v142, v144]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v144]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v135 = v41.accountAddress;
          sim_r.txns.push({
            amt: v144,
            kind: 'from',
            to: v135,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc8, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
          sim_r.view = [ctc8, []];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), [ctc0, ctc5, ctc0, ctc0], [v29, v41, v142, v144], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v142, v144]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v144]);
        const [] = txn3.data;
        const v132 = txn3.time;
        const v130 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = v41;
        const cv42 = false;
        const cv142 = v132;
        const cv144 = v144;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v142 = cv142;
          const v144 = cv144;
          
          if ((() => {
            
            return v42;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v142, v144]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v144]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v135 = v41.accountAddress;
            sim_r.txns.push({
              amt: v144,
              kind: 'from',
              to: v135,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v132 = txn3.time;
      const v130 = txn3.from;
      ;
      const cv41 = v41;
      const cv42 = false;
      const cv142 = v132;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;
      }
    else {
      const [v85] = txn2.data;
      const v89 = txn2.time;
      const v84 = txn2.from;
      ;
      let v93;
      switch (v85[0]) {
        case 'None': {
          
          v93 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v97 = v85[1];
          v93 = v97;
          
          break;
          }
        }
      const v104 = stdlib.mod(v93, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 101));
      const v110 = v41.returnValue;
      const v111 = stdlib.gt(v104, v110);
      const v112 = {
        accountAddress: v84,
        inputValue: v93,
        returnValue: v104
        };
      const v113 = v111 ? v112 : v41;
      let v118;
      switch (v85[0]) {
        case 'None': {
          
          v118 = false;
          
          break;
          }
        case 'Some': {
          const v122 = v85[1];
          v118 = true;
          
          break;
          }
        }
      stdlib.protect(ctc1, await interact.informSuccess(v118), {
        at: './index.rsh:122:73:application',
        fs: ['at ./index.rsh:122:44:application call to [unknown function] (defined at: ./index.rsh:122:48:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
        msg: 'informSuccess',
        who: 'Contestant'
        });
      
      const cv41 = v113;
      const cv42 = true;
      const cv142 = v89;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;}
    }
  const v135 = v41.accountAddress;
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
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Object({
    accountAddress: ctc5,
    inputValue: ctc0,
    returnValue: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v20 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc1, await interact.getBounty(), {
    at: './index.rsh:53:72:application',
    fs: ['at ./index.rsh:52:24:application call to [unknown function] (defined at: ./index.rsh:52:28:function exp)'],
    msg: 'getBounty',
    who: 'Funder'
    });
  const v25 = v24.amt;
  const v26 = v24.deadline;
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:57:20:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v20, v25, v26], [v25, []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:57:20:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:57:20:dot', stdlib.UInt_max, 0)]);
    const [v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v27 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    
    const v43 = {
      accountAddress: v27,
      inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
      returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
      };
    const v41 = v43;
    const v42 = true;
    const v142 = v32;
    const v144 = v28;
    
    if ((() => {
      
      return v42;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v142, v144]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v144]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v135 = v41.accountAddress;
      sim_r.txns.push({
        amt: v144,
        kind: 'from',
        to: v135,
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
      }
    return sim_r;
    })));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  stdlib.protect(ctc2, await interact.postWager(), {
    at: './index.rsh:60:49:application',
    fs: ['at ./index.rsh:60:24:application call to [unknown function] (defined at: ./index.rsh:60:28:function exp)'],
    msg: 'postWager',
    who: 'Funder'
    });
  
  const v43 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v41 = v43;
  let v42 = true;
  let v142 = v32;
  let v144 = v28;
  
  while ((() => {
    
    return v42;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc3], false, v29));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), [ctc0, ctc6, ctc0, ctc0], [v29, v41, v142, v144], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v142, v144]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v144]);
        const [] = txn3.data;
        const v132 = txn3.time;
        const v130 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = v41;
        const cv42 = false;
        const cv142 = v132;
        const cv144 = v144;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v142 = cv142;
          const v144 = cv144;
          
          if ((() => {
            
            return v42;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v142, v144]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v144]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v135 = v41.accountAddress;
            sim_r.txns.push({
              amt: v144,
              kind: 'from',
              to: v135,
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
      const v132 = txn3.time;
      const v130 = txn3.from;
      ;
      const cv41 = v41;
      const cv42 = false;
      const cv142 = v132;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;
      }
    else {
      const [v85] = txn2.data;
      const v89 = txn2.time;
      const v84 = txn2.from;
      ;
      let v93;
      switch (v85[0]) {
        case 'None': {
          
          v93 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v97 = v85[1];
          v93 = v97;
          
          break;
          }
        }
      const v104 = stdlib.mod(v93, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 101));
      const v110 = v41.returnValue;
      const v111 = stdlib.gt(v104, v110);
      const v112 = {
        accountAddress: v84,
        inputValue: v93,
        returnValue: v104
        };
      const v113 = v111 ? v112 : v41;
      const cv41 = v113;
      const cv42 = true;
      const cv142 = v89;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;}
    }
  const v135 = v41.accountAddress;
  ;
  return;
  
  };
export async function Monitor(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    accountAddress: ctc4,
    inputValue: ctc0,
    returnValue: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  const v43 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v41 = v43;
  let v42 = true;
  let v142 = v32;
  let v144 = v28;
  
  while ((() => {
    
    return v42;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc2], false, v29));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), [ctc0, ctc5, ctc0, ctc0], [v29, v41, v142, v144], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v142, v144]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:127:33:dot', stdlib.UInt_max, 2), v29, v41, v144]);
        const [] = txn3.data;
        const v132 = txn3.time;
        const v130 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv41 = v41;
        const cv42 = false;
        const cv142 = v132;
        const cv144 = v144;
        
        (() => {
          const v41 = cv41;
          const v42 = cv42;
          const v142 = cv142;
          const v144 = cv144;
          
          if ((() => {
            
            return v42;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v142, v144]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v41, v144]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:74:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v135 = v41.accountAddress;
            sim_r.txns.push({
              amt: v144,
              kind: 'from',
              to: v135,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v132 = txn3.time;
      const v130 = txn3.from;
      ;
      const cv41 = v41;
      const cv42 = false;
      const cv142 = v132;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;
      }
    else {
      const [v85] = txn2.data;
      const v89 = txn2.time;
      const v84 = txn2.from;
      ;
      let v93;
      switch (v85[0]) {
        case 'None': {
          
          v93 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v97 = v85[1];
          v93 = v97;
          
          break;
          }
        }
      const v104 = stdlib.mod(v93, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 101));
      stdlib.protect(ctc1, await interact.seeSubmission(v84, v93, v104), {
        at: './index.rsh:90:70:application',
        fs: ['at ./index.rsh:90:41:application call to [unknown function] (defined at: ./index.rsh:90:45:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
        msg: 'seeSubmission',
        who: 'Monitor'
        });
      
      const v110 = v41.returnValue;
      const v111 = stdlib.gt(v104, v110);
      const v112 = {
        accountAddress: v84,
        inputValue: v93,
        returnValue: v104
        };
      const v113 = v111 ? v112 : v41;
      const cv41 = v113;
      const cv42 = true;
      const cv142 = v89;
      const cv144 = v144;
      
      v41 = cv41;
      v42 = cv42;
      v142 = cv142;
      v144 = cv144;
      
      continue;}
    }
  const v135 = v41.accountAddress;
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
    size: 262
    }, null, null, {
    count: 9,
    size: 319
    }, {
    count: 9,
    size: 310
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
// "./index.rsh:57:20:dot"
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
byte base64()
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 254
itob
concat
gtxn 0 Sender
int 0
itob
concat
int 0
itob
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
substring 0 8
btoi
store 255
dup
substring 8 56
store 254
dup
substring 56 64
btoi
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 9
store 252
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
itob
concat
load 254
concat
load 253
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
// "./index.rsh:74:31:dot"
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
load 252
int 0
getbyte
int 0
==
bz l1
int 0
store 250
l1:
load 252
int 0
getbyte
int 1
==
bz l2
load 252
substring 1 9
btoi
dup
store 249
store 250
l2:
l0:
load 250
int 101
%
store 249
byte base64()
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
gtxn 0 Sender
load 250
itob
concat
load 249
itob
concat
load 249
load 254
substring 40 48
btoi
>
select
concat
load 253
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
load 255
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
substring 0 8
btoi
store 255
dup
substring 8 56
store 254
dup
substring 56 64
btoi
store 253
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
itob
concat
load 254
concat
load 253
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
// "./index.rsh:127:33:dot"
// "[at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)]"
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
load 254
substring 0 32
==
assert
gtxn 4 Amount
load 253
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
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
load 255
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
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
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
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
                "name": "v41",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
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
                "internalType": "struct T11",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "name": "v41",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
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
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v41",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
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
                "internalType": "struct T11",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v41",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556108da806100826000396000f3fe6080604052600436106100385760003560e01c806310f48adc14610044578063483e6f3a146100595780636a1cd8171461006c5761003f565b3661003f57005b600080fd5b610057610052366004610757565b61007f565b005b6100576100673660046106da565b610182565b61005761007a3660046106c2565b610271565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100bc57600080fd5b600080556100c861054d565b346020830135146100d857600080fd5b8051339052805160006020918201819052825160409081019190915280518435815284830135928101929092528381013582820152517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a1610140610565565b8051604080850135909152825160208381018051929092528151600190820152815143930192909252519084013560609091015261017d81610430565b505050565b60405161019690600290839060200161084c565b6040516020818303038152906040528051906020012060001c600054146101bc57600080fd5b600080556101cf81356080830135610860565b4310156101db57600080fd5b34156101e657600080fd5b7f456ff46e184175d3e501c2f6e099aaca2a31a8ebcb0fa2cc15ca4f4ae935db0381604051610215919061081c565b60405180910390a1610225610565565b80518235905261023d368390038301602084016106eb565b6020808301805192909252815160009101528051436040909101525160a083013560609091015261026d81610430565b5050565b60405161028590600290839060200161084c565b6040516020818303038152906040528051906020012060001c600054146102ab57600080fd5b600080556102b7610586565b6102c682356080840135610860565b43106102d157600080fd5b34156102dc57600080fd5b60006102ee60e0840160c085016106a1565b600181111561030d57634e487b7160e01b600052602160045260246000fd5b141561031c5760008152610363565b600161032e60e0840160c085016106a1565b600181111561034d57634e487b7160e01b600052602160045260246000fd5b1415610363576101008201356020820181905281525b805161037190606590610884565b6040808301918252606083018051339052835181516020015291519151810191909152517f4d6fadd9b2c3fba56762a84dd49e2c1847ad88633e3c4385fe7768cefaec808e906103c29084906107b2565b60405180910390a16103d2610565565b80518335905260408201516060840135106103fe576103f9368490038401602085016106eb565b610404565b81606001515b6020808301805192909252815160019101528051436040909101525160a084013560609091015261017d815b806020015160200151156104da576104466105ae565b81515181526020808301805151828401908152815160409081015181860190815292516060908101518187019081528251600281880152875181850152935180516001600160a01b031692850192909252948101516080840152015160a0820152905160c0820152905160e08201526101000160408051601f19818403018152919052805160209091012060005550610501565b6104e26105dc565b6020808301805151835152516060015182519091015261026d81610504565b50565b80518051516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610545573d6000803e3d6000fd5b506000805533ff5b60405180602001604052806105606105fc565b905290565b60408051606081018252600091810191825290815260208101610560610626565b60405180608001604052806000815260200160008152602001600081526020016105606105fc565b6040518060800160405280600081526020016105c86105fc565b815260200160008152602001600081525090565b60405180604001604052806105ef610656565b8152600060209091015290565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b60405180608001604052806106396105fc565b815260200160001515815260200160008152602001600081525090565b60405180604001604052806106696105fc565b8152602001600081525090565b80356001600160a01b038116811461068d57600080fd5b919050565b80356002811061068d57600080fd5b6000602082840312156106b2578081fd5b6106bb82610692565b9392505050565b600061012082840312156106d4578081fd5b50919050565b600060e082840312156106d4578081fd5b6000606082840312156106fc578081fd5b6040516060810181811067ffffffffffffffff8211171561072b57634e487b7160e01b83526041600452602483fd5b60405261073783610676565b815260208301356020820152604083013560408201528091505092915050565b6000606082840312156106d4578081fd5b803582526001600160a01b0361078060208301610676565b16602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b61012081016107c18284610768565b6107cd60c08401610692565b600281106107eb57634e487b7160e01b600052602160045260246000fd5b60c083015260e083013580151580821461080457600080fd5b60e08401525061010092830135929091019190915290565b60e0810161082a8284610768565b60c083013580151580821461083e57600080fd5b8060c0850152505092915050565b82815260e081016106bb6020830184610768565b6000821982111561087f57634e487b7160e01b81526011600452602481fd5b500190565b60008261089f57634e487b7160e01b81526012600452602481fd5b50069056fea2646970667358221220f88230ba82e8e0651963050182c782151966d63b6f48bca07b83c1b60d0c186b64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

