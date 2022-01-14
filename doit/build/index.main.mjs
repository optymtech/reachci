// Automatically generated with Reach 0.1.8 (0b0e4e5c)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (0b0e4e5c)';
export const _backendVersion = 7;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    accountAddress: ctc1,
    inputValue: ctc0,
    returnValue: ctc0
    });
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc2, ctc0, ctc0]
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
export async function Contestant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contestant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contestant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    accountAddress: ctc3,
    inputValue: ctc0,
    returnValue: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v146, v147], secs: v149, time: v148, didSend: v33, from: v145 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.informBounty(v146, v147), {
    at: './index.rsh:63:38:application',
    fs: ['at ./index.rsh:62:17:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
    msg: 'informBounty',
    who: 'Contestant'
    });
  
  const v155 = {
    accountAddress: v145,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v156 = v155;
  let v157 = true;
  let v158 = v148;
  let v160 = v146;
  
  while (await (async () => {
    
    return v157;})()) {
    const v165 = stdlib.sub(stdlib.UInt_max, v158);
    const v166 = stdlib.sub(v165, v147);
    const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v167, {
      at: 'reach standard library:585:15:application',
      fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
      msg: null,
      who: 'Contestant'
      });
    const v168 = stdlib.add(v158, v147);
    const v172 = stdlib.protect(ctc2, await interact.submitValue(), {
      at: './index.rsh:80:74:application',
      fs: ['at ./index.rsh:79:25:application call to [unknown function] (defined at: ./index.rsh:79:29:function exp)', 'at ./index.rsh:79:25:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
      msg: 'submitValue',
      who: 'Contestant'
      });
    let v173;
    switch (v172[0]) {
      case 'None': {
        const v174 = v172[1];
        v173 = false;
        
        break;
        }
      case 'Some': {
        const v175 = v172[1];
        v173 = true;
        
        break;
        }
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v147, v156, v160, v168, v172],
      evt_cnt: 1,
      funcNum: 2,
      lct: v158,
      onlyIf: v173,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:77:26:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v178], secs: v180, time: v179, didSend: v81, from: v177 } = txn2;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:77:26:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        let v183;
        switch (v178[0]) {
          case 'None': {
            const v184 = v178[1];
            v183 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          case 'Some': {
            const v185 = v178[1];
            v183 = v185;
            
            break;
            }
          }
        const v186 = stdlib.mod(v183, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 4));
        const v188 = v156.returnValue;
        const v189 = stdlib.gt(v186, v188);
        const v190 = {
          accountAddress: v177,
          inputValue: v183,
          returnValue: v186
          };
        const v191 = v189 ? v190 : v156;
        
        const cv156 = v191;
        const cv157 = true;
        const cv158 = v179;
        const cv160 = v160;
        
        await (async () => {
          const v156 = cv156;
          const v157 = cv157;
          const v158 = cv158;
          const v160 = cv160;
          
          if (await (async () => {
            
            return v157;})()) {
            const v165 = stdlib.sub(stdlib.UInt_max, v158);
            const v166 = stdlib.sub(v165, v147);
            const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v167, {
              at: 'reach standard library:585:15:application',
              fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
              msg: null,
              who: 'Contestant'
              });
            const v168 = stdlib.add(v158, v147);
            sim_r.isHalt = false;
            }
          else {
            const v204 = v156.accountAddress;
            sim_r.txns.push({
              amt: v160,
              kind: 'from',
              to: v204,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v168],
      tys: [ctc0, ctc4, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v147, v156, v160, v168],
        evt_cnt: 0,
        funcNum: 3,
        lct: v158,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv156 = v156;
          const cv157 = false;
          const cv158 = v198;
          const cv160 = v160;
          
          await (async () => {
            const v156 = cv156;
            const v157 = cv157;
            const v158 = cv158;
            const v160 = cv160;
            
            if (await (async () => {
              
              return v157;})()) {
              const v165 = stdlib.sub(stdlib.UInt_max, v158);
              const v166 = stdlib.sub(v165, v147);
              const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v167, {
                at: 'reach standard library:585:15:application',
                fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
                msg: null,
                who: 'Contestant'
                });
              const v168 = stdlib.add(v158, v147);
              sim_r.isHalt = false;
              }
            else {
              const v204 = v156.accountAddress;
              sim_r.txns.push({
                amt: v160,
                kind: 'from',
                to: v204,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
      ;
      const cv156 = v156;
      const cv157 = false;
      const cv158 = v198;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;
      }
    else {
      const {data: [v178], secs: v180, time: v179, didSend: v81, from: v177 } = txn2;
      ;
      let v183;
      switch (v178[0]) {
        case 'None': {
          const v184 = v178[1];
          v183 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v185 = v178[1];
          v183 = v185;
          
          break;
          }
        }
      const v186 = stdlib.mod(v183, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 4));
      const v188 = v156.returnValue;
      const v189 = stdlib.gt(v186, v188);
      const v190 = {
        accountAddress: v177,
        inputValue: v183,
        returnValue: v186
        };
      const v191 = v189 ? v190 : v156;
      let v193;
      switch (v178[0]) {
        case 'None': {
          const v194 = v178[1];
          v193 = false;
          
          break;
          }
        case 'Some': {
          const v195 = v178[1];
          v193 = true;
          
          break;
          }
        }
      stdlib.protect(ctc1, await interact.informSuccess(v193), {
        at: './index.rsh:122:73:application',
        fs: ['at ./index.rsh:122:44:application call to [unknown function] (defined at: ./index.rsh:122:48:function exp)', 'at ./index.rsh:86:25:application call to [unknown function] (defined at: ./index.rsh:86:32:function exp)'],
        msg: 'informSuccess',
        who: 'Contestant'
        });
      
      const cv156 = v191;
      const cv157 = true;
      const cv158 = v179;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;}
    
    }
  const v204 = v156.accountAddress;
  ;
  return;
  
  
  };
export async function Funder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Funder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Funder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
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
  const ctc5 = stdlib.T_Object({
    accountAddress: ctc4,
    inputValue: ctc0,
    returnValue: ctc0
    });
  
  
  const v142 = stdlib.protect(ctc1, await interact.getBounty(), {
    at: './index.rsh:53:72:application',
    fs: ['at ./index.rsh:52:24:application call to [unknown function] (defined at: ./index.rsh:52:28:function exp)'],
    msg: 'getBounty',
    who: 'Funder'
    });
  const v143 = v142.amt;
  const v144 = v142.deadline;
  
  const txn1 = await (ctc.sendrecv({
    args: [v143, v144],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:57:20:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v143, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v146, v147], secs: v149, time: v148, didSend: v33, from: v145 } = txn1;
      
      sim_r.txns.push({
        amt: v146,
        kind: 'to',
        tok: undefined
        });
      
      const v155 = {
        accountAddress: v145,
        inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
        returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
        };
      const v156 = v155;
      const v157 = true;
      const v158 = v148;
      const v160 = v146;
      
      if (await (async () => {
        
        return v157;})()) {
        const v165 = stdlib.sub(stdlib.UInt_max, v158);
        const v166 = stdlib.sub(v165, v147);
        const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v167, {
          at: 'reach standard library:585:15:application',
          fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
          msg: null,
          who: 'Funder'
          });
        const v168 = stdlib.add(v158, v147);
        sim_r.isHalt = false;
        }
      else {
        const v204 = v156.accountAddress;
        sim_r.txns.push({
          amt: v160,
          kind: 'from',
          to: v204,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v146, v147], secs: v149, time: v148, didSend: v33, from: v145 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.postWager(), {
    at: './index.rsh:60:49:application',
    fs: ['at ./index.rsh:60:24:application call to [unknown function] (defined at: ./index.rsh:60:28:function exp)'],
    msg: 'postWager',
    who: 'Funder'
    });
  
  const v155 = {
    accountAddress: v145,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v156 = v155;
  let v157 = true;
  let v158 = v148;
  let v160 = v146;
  
  while (await (async () => {
    
    return v157;})()) {
    const v165 = stdlib.sub(stdlib.UInt_max, v158);
    const v166 = stdlib.sub(v165, v147);
    const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v167, {
      at: 'reach standard library:585:15:application',
      fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
      msg: null,
      who: 'Funder'
      });
    const v168 = stdlib.add(v158, v147);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: ['time', v168],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v147, v156, v160, v168],
        evt_cnt: 0,
        funcNum: 3,
        lct: v158,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv156 = v156;
          const cv157 = false;
          const cv158 = v198;
          const cv160 = v160;
          
          await (async () => {
            const v156 = cv156;
            const v157 = cv157;
            const v158 = cv158;
            const v160 = cv160;
            
            if (await (async () => {
              
              return v157;})()) {
              const v165 = stdlib.sub(stdlib.UInt_max, v158);
              const v166 = stdlib.sub(v165, v147);
              const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v167, {
                at: 'reach standard library:585:15:application',
                fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
                msg: null,
                who: 'Funder'
                });
              const v168 = stdlib.add(v158, v147);
              sim_r.isHalt = false;
              }
            else {
              const v204 = v156.accountAddress;
              sim_r.txns.push({
                amt: v160,
                kind: 'from',
                to: v204,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
      ;
      const cv156 = v156;
      const cv157 = false;
      const cv158 = v198;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;
      }
    else {
      const {data: [v178], secs: v180, time: v179, didSend: v81, from: v177 } = txn2;
      ;
      let v183;
      switch (v178[0]) {
        case 'None': {
          const v184 = v178[1];
          v183 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v185 = v178[1];
          v183 = v185;
          
          break;
          }
        }
      const v186 = stdlib.mod(v183, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 4));
      const v188 = v156.returnValue;
      const v189 = stdlib.gt(v186, v188);
      const v190 = {
        accountAddress: v177,
        inputValue: v183,
        returnValue: v186
        };
      const v191 = v189 ? v190 : v156;
      const cv156 = v191;
      const cv157 = true;
      const cv158 = v179;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;}
    
    }
  const v204 = v156.accountAddress;
  ;
  return;
  
  
  };
export async function Monitor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Monitor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Monitor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    accountAddress: ctc3,
    inputValue: ctc0,
    returnValue: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v146, v147], secs: v149, time: v148, didSend: v33, from: v145 } = txn1;
  ;
  const v155 = {
    accountAddress: v145,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:74:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:74:78:decimal', stdlib.UInt_max, 0)
    };
  let v156 = v155;
  let v157 = true;
  let v158 = v148;
  let v160 = v146;
  
  while (await (async () => {
    
    return v157;})()) {
    const v165 = stdlib.sub(stdlib.UInt_max, v158);
    const v166 = stdlib.sub(v165, v147);
    const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v167, {
      at: 'reach standard library:585:15:application',
      fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
      msg: null,
      who: 'Monitor'
      });
    const v168 = stdlib.add(v158, v147);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: ['time', v168],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v147, v156, v160, v168],
        evt_cnt: 0,
        funcNum: 3,
        lct: v158,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:127:33:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv156 = v156;
          const cv157 = false;
          const cv158 = v198;
          const cv160 = v160;
          
          await (async () => {
            const v156 = cv156;
            const v157 = cv157;
            const v158 = cv158;
            const v160 = cv160;
            
            if (await (async () => {
              
              return v157;})()) {
              const v165 = stdlib.sub(stdlib.UInt_max, v158);
              const v166 = stdlib.sub(v165, v147);
              const v167 = stdlib.ge(v166, stdlib.checkedBigNumberify('reach standard library:585:43:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v167, {
                at: 'reach standard library:585:15:application',
                fs: ['at reach standard library:593:29:application call to [unknown function] (defined at: reach standard library:582:55:function exp)', 'at ./index.rsh:126:29:application call to "relativeTime" (defined at: reach standard library:588:71:function exp)'],
                msg: null,
                who: 'Monitor'
                });
              const v168 = stdlib.add(v158, v147);
              sim_r.isHalt = false;
              }
            else {
              const v204 = v156.accountAddress;
              sim_r.txns.push({
                amt: v160,
                kind: 'from',
                to: v204,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v125, from: v197 } = txn3;
      ;
      const cv156 = v156;
      const cv157 = false;
      const cv158 = v198;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;
      }
    else {
      const {data: [v178], secs: v180, time: v179, didSend: v81, from: v177 } = txn2;
      ;
      let v183;
      switch (v178[0]) {
        case 'None': {
          const v184 = v178[1];
          v183 = stdlib.checkedBigNumberify('./index.rsh:88:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v185 = v178[1];
          v183 = v185;
          
          break;
          }
        }
      const v186 = stdlib.mod(v183, stdlib.checkedBigNumberify('./bountyFunction.rsh:4:14:decimal', stdlib.UInt_max, 4));
      stdlib.protect(ctc1, await interact.seeSubmission(v177, v183, v186), {
        at: './index.rsh:90:70:application',
        fs: ['at ./index.rsh:90:41:application call to [unknown function] (defined at: ./index.rsh:90:45:function exp)', 'at ./index.rsh:86:25:application call to [unknown function] (defined at: ./index.rsh:86:32:function exp)'],
        msg: 'seeSubmission',
        who: 'Monitor'
        });
      
      const v188 = v156.returnValue;
      const v189 = stdlib.gt(v186, v188);
      const v190 = {
        accountAddress: v177,
        inputValue: v183,
        returnValue: v186
        };
      const v191 = v189 ? v190 : v156;
      const cv156 = v191;
      const cv157 = true;
      const cv158 = v179;
      const cv160 = v160;
      
      v156 = cv156;
      v157 = cv157;
      v158 = cv158;
      v160 = cv160;
      
      continue;}
    
    }
  const v204 = v156.accountAddress;
  ;
  return;
  
  
  };
const _ALGO = {
  appApproval: `BSAGAAEDCDhAJgEAMSAyAxJEMQYyAxJEIjUAMRhBApsoZEkiWzUBJVs1AjEbJBJENhoAF0mBAgxAAPpJJAxAAFwkEkQkNAESRDYaARdJIhJMNAISEUQjr2RJIls1/0lXCDA1/kkhBFs1/UkhBVs1/Eg2GgJJFSISREiABGE3NjWwMgY0/A9ENP8WNP4iFlEHCFAyBhZQNP0WUEIBaEgkNAESRDYaARdJIhJMNAISEUQjr2RJIls1/0lXCDA1/kkhBFs1/UkhBVs1/Eg2GgJJFYEJEkRJNftIgARkOTFiNPtQsDIGNPwMRDT7IlVJIwxAAA8jEkQ0+yNbSTX5NfpCAARIIjX6NPqBBBg1+TT/FjT+MQA0+hZQNPkWUDT5NP6BKFsNTSMWUQcIUDIGFlA0/RZQQgDQSSMMQAABSEgiNAESRDYaARdJIhJMNAISEUQoSDYaAkkVgRASREkiWzX/SSVbNf5IgARhY2QxNP8WUDT+FlCwgaCNBklBADQ0AEkjCDUATEsBOAgSRCNLATgQEkQiSwE4ARJEMgNLATgGEkQyA0sBOCASRDIKSwE4BxJESDT/SUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRINP4WMQAlr1Alr1AjFlEHCFAyBhZQNP8WUElXADA1/0lXMAEXNf5JgTFbNf1JgTlbNfxISRc1+0g0/kEAQYH///////////8BNP0JNPsJIg9ENP00+wg1+jT7FjT/UDT8FlA0+hZQI69LAVcASGdIJDUBMgY1AjEZIhJEQgAuNPxJQQAPsbIII7IQNP9XACCyB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSRCg0ARY0AhZQZzQASUkjCDIEEkQxFhJEgegHCzEBDkQjQyJDMRkiEkQiNQEiNQJC/88=`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 8
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
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
                "internalType": "struct T7",
                "name": "v178",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
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
                "internalType": "struct T7",
                "name": "v178",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010cf380380620010cf833981016040819052620000269162000474565b60008055436003556200005660408051608081018252600060208201818152928201819052606082015290815290565b604080518351815260208085015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602082015151620000b1903414600762000161565b80513390528051600060209091018190528151604001526200011a604080516060808201835260008284018181528352835160e0810185526080810182815260a0820183905260c082018390528152602081810183905294810182905291820152909182015290565b60208084018051820151835152835183830180519190915280516001930192909252815143604090910152515190516060015262000158816200018b565b5050506200055c565b81620001875760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815281602001516020015115620002a357815151602083015160400151620001e191600091620001cb90600019620004ea565b620001d79190620004ea565b1015600862000161565b815151602083015160400151620001f9919062000504565b81526200020562000301565b8251518082526020808501805151828501908152905160609081015160408087019182528751838801908152600360005543600155815180870197909752935180516001600160a01b03168783015294850151928601929092529201516080840152905160a08301525160c082015260e001604051602081830303815290604052600290805190602001906200029d92919062000355565b50505050565b60208201518051516060909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620002e8573d6000803e3d6000fd5b50600080805560018190556200018790600290620003e4565b60405180608001604052806000815260200162000341604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b815260200160008152602001600081525090565b82805462000363906200051f565b90600052602060002090601f016020900481019282620003875760008555620003d2565b82601f10620003a257805160ff1916838001178555620003d2565b82800160010185558215620003d2579182015b82811115620003d2578251825591602001919060010190620003b5565b50620003e092915062000426565b5090565b508054620003f2906200051f565b6000825580601f1062000403575050565b601f01602090049060005260206000209081019062000423919062000426565b50565b5b80821115620003e0576000815560010162000427565b604080519081016001600160401b03811182821017156200046e57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200048857600080fd5b620004926200043d565b835181526040601f1983011215620004a957600080fd5b620004b36200043d565b60208581015182526040909501518582015293810193909352509092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015620004ff57620004ff620004d4565b500390565b600082198211156200051a576200051a620004d4565b500190565b600181811c908216806200053457607f821691505b602082108114156200055657634e487b7160e01b600052602260045260246000fd5b50919050565b610b63806200056c6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806373b4522c14610078578063832307571461008b578063ab53f2c6146100a0578063c5759068146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610838565b6100d6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610240565b60405161006f929190610850565b6100526100d13660046108ad565b6102dd565b6100e6600360005414600e610503565b610100813515806100f957506001548235145b600f610503565b600080805560028054610112906108bf565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906108bf565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061095c565b90506101b781606001514310156010610503565b7f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516101e69190610a04565b60405180910390a16101fa3415600d610503565b61020261068c565b81518151526020808301518183018051919091528051600092019190915280514360409182015283015190516060015261023b8161052c565b505050565b600060606000546002808054610255906108bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610281906108bf565b80156102ce5780601f106102a3576101008083540402835291602001916102ce565b820191906000526020600020905b8154815290600101906020018083116102b157829003601f168201915b50505050509050915091509091565b6102ed600360005414600a610503565b6103078135158061030057506001548235145b600b610503565b600080805560028054610319906108bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610345906108bf565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa919061095c565b90506103b46106b2565b6103c582606001514310600c610503565b7f063e38b15bd91c46b96000cea51731cf7021b18afbadc3b67e50a98d177fcd31836040516103f49190610a4a565b60405180910390a161040834156009610503565b600061041a6040850160208601610aa4565b600181111561042b5761042b610a34565b141561043a5760008152610472565b600161044c6040850160208601610aa4565b600181111561045d5761045d610a34565b14156104725760608301356020820181905281525b805161048090600490610ac6565b604080830191825260608301805133905283518151602001529151915101526104a761068c565b8251815152602083015160409081015190830151116104ca5782602001516104d0565b81606001515b6020808301805192909252815160019101528051436040918201528401519051606001526104fd8161052c565b50505050565b816105285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516020810190915260008152816020015160200151156106315781515160208301516040015161057b9160009161056890600019610afe565b6105729190610afe565b10156008610503565b8151516020830151604001516105919190610b15565b815261059b6106da565b8251518082526020808501805151828501908152905160609081015160408087019182528751838801908152600360005543600155815180870197909752935180516001600160a01b03168783015294850151928601929092529201516080840152905160a08301525160c082015260e001604051602081830303815290604052600290805190602001906104fd929190610708565b60208201518051516060909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610675573d6000803e3d6000fd5b50600080805560018190556105289060029061078c565b604080516060810182526000918101918252908152602081016106ad6107c9565b905290565b60405180608001604052806000815260200160008152602001600081526020016106ad6107f9565b6040518060800160405280600081526020016106f46107f9565b815260200160008152602001600081525090565b828054610714906108bf565b90600052602060002090601f016020900481019282610736576000855561077c565b82601f1061074f57805160ff191683800117855561077c565b8280016001018555821561077c579182015b8281111561077c578251825591602001919060010190610761565b50610788929150610823565b5090565b508054610798906108bf565b6000825580601f106107a8575050565b601f0160209004906000526020600020908101906107c69190610823565b50565b60405180608001604052806107dc6107f9565b815260200160001515815260200160008152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b5b808211156107885760008155600101610824565b60006040828403121561084a57600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561088457858101830151858201606001528201610868565b81811115610896576000606083870101525b50601f01601f191692909201606001949350505050565b60006080828403121561084a57600080fd5b600181811c908216806108d357607f821691505b6020821081141561084a57634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff8111828210171561092557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff8111828210171561092557634e487b7160e01b600052604160045260246000fd5b600081830360c081121561096f57600080fd5b6109776108f4565b835181526060601f198301121561098d57600080fd5b61099561092b565b60208501519092506001600160a01b03811681146109b257600080fd5b8083525060408401516020830152606084015160408301528160208201526080840151604082015260a08401516060820152809250505092915050565b803580151581146109ff57600080fd5b919050565b8135815260408101610a18602084016109ef565b1515602083015292915050565b8035600281106109ff57600080fd5b634e487b7160e01b600052602160045260246000fd5b8135815260808101610a5e60208401610a25565b60028110610a7c57634e487b7160e01b600052602160045260246000fd5b6020830152610a8d604084016109ef565b151560408301526060830135606083015292915050565b600060208284031215610ab657600080fd5b610abf82610a25565b9392505050565b600082610ae357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b600082821015610b1057610b10610ae8565b500390565b60008219821115610b2857610b28610ae8565b50019056fea2646970667358221220f3dcee05e3de75c602805d2fb710ec40294e1671f15fdccd1d0b5fa08ebd5fae64736f6c63430008090033`,
  BytecodeLen: 4303,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contestant": Contestant,
  "Funder": Funder,
  "Monitor": Monitor
  };
export const _APIs = {
  };
