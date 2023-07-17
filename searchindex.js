Search.setIndex({"docnames": ["clock_and_reset", "combinational_logic", "datatype_parameter", "example1_sync_fifo", "examples", "filelist", "generate_if_for", "indentation_and_alignment", "index", "macro", "module", "parameter", "sequential_logic", "structure", "variable_naming"], "filenames": ["clock_and_reset.rst", "combinational_logic.rst", "datatype_parameter.rst", "example1_sync_fifo.rst", "examples.rst", "filelist.rst", "generate_if_for.rst", "indentation_and_alignment.rst", "index.rst", "macro.rst", "module.rst", "parameter.rst", "sequential_logic.rst", "structure.rst", "variable_naming.rst"], "titles": ["Clock and reset", "Combinational logic", "Data-type Parameter", "Sync FIFO", "Examples", "Filelist", "Generate if/for", "Indentation and alignment", "RTL Coding Style", "Macro", "Module", "Parameter", "Sequential logic", "Structure", "Variable definition and naming"], "terms": {"i": [0, 1, 2, 3, 5, 6, 7, 8, 10, 12, 13, 14], "veri": [0, 2, 6, 7, 13], "common": 0, "signal": [0, 3, 12, 13, 14], "us": [0, 1, 2, 3, 5, 6, 7, 10, 11, 12, 13, 14], "flip": [0, 12], "flop": 0, "latch": 0, "memori": 0, "recommand": 0, "name": [0, 3, 7, 8], "recogn": 0, "abbrevi": [0, 5, 14], "clk": [0, 3, 6, 7, 9, 10, 12, 13], "when": [0, 5, 11, 12, 13, 14], "multipl": 0, "ar": [0, 1, 2, 5, 6, 7, 9, 10, 12, 13, 14], "implement": [0, 1, 3, 6], "suffix": [0, 10], "requir": 0, "ad": [0, 2, 13], "distingush": 0, "each": [0, 6, 7, 10], "other": [0, 5, 11], "To": 0, "mention": [0, 13], "shall": [0, 12], "clear": [0, 13, 14], "meaning": [0, 2, 14], "For": [0, 1, 5, 6, 9, 10, 12, 13, 14], "exampl": [0, 1, 2, 5, 6, 7, 8, 9, 10, 12, 13, 14], "input": [0, 2, 3, 6, 7, 9, 10, 13, 14], "logic": [0, 2, 3, 6, 7, 8, 9, 10, 11, 13, 14], "clk_slc": 0, "function": [0, 6, 7, 14], "system": [0, 10, 14], "level": [0, 7], "cach": [0, 6, 13], "clk_dmc": 0, "ddr": 0, "control": [0, 3], "clk_cfg": 0, "config": 0, "clk_dbg": 0, "debug": 0, "In": [0, 1, 2, 5, 6, 7, 10, 12, 13], "addit": [0, 3, 12, 13], "some": [0, 6, 7, 10, 12, 13, 14], "note": [0, 6], "ock": 0, "dynam": 0, "frequenc": 0, "switch": 0, "process": [0, 5, 6, 12, 14], "dedic": 0, "glitch": 0, "free": 0, "circuit": [0, 10, 11], "It": [0, 12, 13, 14], "must": [0, 5, 6, 7], "ip": [0, 5, 9], "don": [0, 7], "t": [0, 7], "do": [0, 5, 14], "yourself": 0, "r": 0, "directili": 0, "written": 0, "user": [0, 1, 2, 3, 6, 13], "synthes": 0, "like": [0, 14], "anoth": [0, 13], "rst": 0, "given": [0, 14], "mostli": 0, "activ": 0, "low": [0, 3, 12], "abov": [0, 2, 10, 13], "optim": 0, "rst_n": [0, 3, 6, 7, 12, 13], "_n": 0, "repres": [0, 1], "As": 0, "same": [0, 1, 5, 6, 12, 14], "rst_n_slc": 0, "rst_n_dmc": 0, "rst_n_hwe": 0, "rst_n_sw": 0, "softwar": 0, "trigger": 0, "mode": [0, 6, 13], "can": [0, 1, 2, 6, 7, 10, 11, 12, 13], "asynchron": [0, 12], "synchron": [0, 12], "always_ff": [0, 3, 7, 12, 13], "posedg": [0, 3, 7, 12, 13], "negedg": [0, 3, 7, 12, 13], "begin": [0, 1, 3, 5, 6, 7, 9, 12, 13], "end": [0, 1, 3, 5, 6, 7, 9, 12, 13], "els": [0, 1, 3, 6, 7, 12, 13], "follow": [0, 1, 2, 3, 5, 6, 7, 10, 11, 13, 14], "principl": 0, "releas": 0, "assign": [1, 2, 3, 6, 7, 11, 12, 13], "always_comb": [1, 7, 13], "recommend": [1, 9, 12], "occas": 1, "rel": 1, "simpl": 1, "symmetr": 1, "handshake_don": 1, "req_vld": [1, 3], "req_rdi": [1, 3], "fix_arb": 1, "high_qos_req_en": 1, "high_qos_req_pld": 1, "mid_qos_req_en": 1, "mid_qos_req_pld": 1, "low_qos_req_en": 1, "low_qos_req_pld": 1, "pld_width": 1, "1": [1, 2, 3, 6, 7, 9, 10, 11, 12, 13], "b0": [1, 3, 7, 11, 12, 13], "complex": 1, "rather": [1, 13, 14], "than": [1, 12, 13, 14], "hierarch": 1, "judgement": 1, "more": [1, 2, 12], "friendli": 1, "readabl": [1, 13], "design": [1, 3, 6, 9], "base": [1, 3, 6, 14], "systemverilog": [1, 12, 13], "replac": [1, 6, 7, 13], "alwai": [1, 6, 7, 10], "dmc_rdata_vld": 1, "dmc_rdata_last": 1, "context_t": 1, "dmc_rdata_id": 1, "dmc_raddr_bit5": 1, "data_ram_wdata": 1, "256": 1, "dmc_rdata": 1, "512": 1, "summari": 1, "synthesi": [1, 2, 11], "result": 1, "probabl": 1, "affect": [1, 5, 9], "code": [1, 5, 6, 7, 9, 10, 13, 14], "style": 1, "fact": [1, 7], "express": [1, 12], "all": [1, 5, 6, 7, 11, 13], "paraemt": 2, "featur": 2, "allow": 2, "you": [2, 10, 11, 12, 13], "pass": [2, 13], "defin": [2, 3, 5, 6, 9, 10, 11, 13], "new": [2, 7, 10], "variabl": [2, 6, 7, 8, 11], "an": [2, 3, 5, 7, 8, 9, 10, 13, 14], "which": [2, 3, 5, 6, 9, 13], "modul": [2, 3, 6, 7, 8, 9, 13], "param_test": 2, "dat_typ": 2, "din": 2, "output": [2, 3, 6, 7, 9, 10, 13, 14], "dout": 2, "endmodul": [2, 3, 6, 7, 9, 10, 13], "The": [2, 5, 6, 9, 10, 11, 13, 14], "instanti": [2, 6, 13], "inst": 2, "2": [2, 6, 13], "0": [2, 3, 6, 7, 11, 13, 14], "uinst_1": 2, "din_width3": 2, "dout_width3": 2, "5": 2, "u_inst2": 2, "din_width6": 2, "dout_width6": 2, "thi": [2, 5, 7, 8, 9, 10, 12, 13, 14], "differ": [2, 11], "from": [2, 6, 11], "data_width": [2, 12], "3": [2, 13], "also": [2, 5, 9, 10, 12], "support": [2, 3, 6, 13], "packag": [2, 9, 10], "well": 2, "specif": [2, 11], "two": [2, 3, 14], "adder": 2, "din1": [2, 7], "din2": 2, "unsigned_add": 2, "unsign": [2, 3, 9, 10, 11, 14], "7": 2, "u_uadd": 2, "udin1": 2, "udin2": 2, "udout": 2, "signed_add": 2, "sign": 2, "u_sadd": 2, "sdin1": 2, "sdin2": 2, "sdout": 2, "subtract": 2, "arbitrarili": 2, "regslic": [2, 6], "concern": 2, "content": [2, 7, 10], "left": [2, 7], "unchang": 2, "reg_slic": [2, 6, 7, 13], "pld_type": [2, 3, 6, 13], "out_vld": [2, 14], "out_rdi": [2, 14], "out_pld": [2, 7, 14], "in_vld": [2, 14], "in_rdi": [2, 14], "in_pld": [2, 7], "pld1": 2, "31": [2, 7, 11, 14], "addr": [2, 13], "qo": [2, 13], "endpackag": 2, "pld2": 2, "4": [2, 6, 7, 13], "u_rs1": 2, "in_vld1": 2, "in_rdy1": 2, "in_pld1": 2, "out_vld1": 2, "out_rdy1": 2, "out_pld1": 2, "u_rs2": 2, "in_vld2": 2, "in_rdy2": 2, "in_pld2": 2, "out_vld2": 2, "out_rdy2": 2, "out_pld2": 2, "By": 2, "handl": 2, "syntax": [2, 10], "synthesiz": 2, "ha": 2, "been": 2, "test": 2, "lead": 2, "commerci": 2, "qc": 2, "tool": [2, 12], "below": [3, 7, 10, 13], "util": 3, "pointer": 3, "record": 3, "write": [3, 6, 12], "read": 3, "posit": 3, "counter": 3, "space": [3, 7], "handshak": 3, "protocol": [3, 14], "full": [3, 6, 13], "ack_vld": 3, "empti": 3, "payload": [3, 13, 14], "non": 3, "reset": [3, 8, 12, 13], "mem": 3, "compani": 3, "urbadass": 3, "ltd": 3, "engin": 3, "zick": 3, "creat": [3, 10], "date": 3, "02": 3, "26": 3, "2023": 3, "09": 3, "01": 3, "54": 3, "pm": 3, "sync_fifo": 3, "project": [3, 5], "descript": [3, 10], "serial": 3, "data": [3, 7, 8, 9, 10, 11, 12, 14], "depend": 3, "revis": 3, "file": [3, 5, 9], "comment": 3, "paramet": [3, 6, 8, 9, 10, 13, 14], "int": 3, "depth": [3, 14], "8": 3, "type": [3, 6, 8, 11, 13, 14], "32": [3, 11, 14], "localparam": [3, 9], "awidth": 3, "clog2": 3, "req": 3, "req_pld": 3, "ack": 3, "ack_rdi": 3, "ack_pld": 3, "intern": [3, 10, 13], "pld_mem": 3, "wr_ptr": 3, "rd_ptr": 3, "rd_en": 3, "wr_en": 3, "fifo_cnt": 3, "fifo_ful": 3, "fifo_empti": 3, "wr": 3, "rd": 3, "enabl": [3, 12], "case": [3, 6], "b1": [3, 7], "old": 3, "version": 3, "vc": 3, "xrun": 3, "doe": [3, 14], "default": [3, 14], "oper": [3, 7, 13], "simultan": 3, "endcas": 3, "access": [3, 13], "sync": 4, "fifo": 4, "rule": [5, 10], "should": [5, 7, 11, 14], "observ": 5, "keep": 5, "prefix": [5, 14], "need": [5, 9, 11, 13, 14], "guarante": 5, "uniqu": [5, 6], "within": [5, 14], "sc_bus_arbit": [5, 9], "sv": [5, 9, 10], "sc_bus_decod": [5, 9], "sc_bus_buff": [5, 9], "gener": [5, 7, 8], "awar": 5, "central": 5, "macro": [5, 8], "definit": [5, 8, 11], "time": [5, 10], "cancel": [5, 9], "If": [5, 14], "group": [5, 9, 14], "togeth": [5, 9, 14], "one": [5, 7, 9, 11], "place": [5, 9], "correspondingli": [5, 9], "have": [5, 6, 7, 9, 14], "undefin": [5, 9], "counterpart": [5, 9], "singl": [5, 9, 14], "sc_bus_defin": [5, 9], "sc_bus_undefin": [5, 9], "unless": 5, "solut": 5, "problem": 5, "after": [5, 9, 10], "complet": [5, 9], "finish": [5, 9], "caus": [5, 9], "modifi": [5, 9], "method": [6, 9], "produc": 6, "batch": 6, "expect": [6, 9, 12], "combin": [6, 8], "select": 6, "desir": [6, 13], "multifunct": 6, "regular": 6, "univers": 6, "integr": [6, 13], "mai": [6, 14], "seper": 6, "dure": 6, "through": 6, "give": 6, "correspond": [6, 10], "reg": [6, 13], "slice": [6, 13], "three": [6, 12, 13], "forward": [6, 13], "b0001": [6, 13], "backward": [6, 13], "b0010": [6, 13], "b0100": [6, 13], "bypass": [6, 13], "b1000": [6, 13], "func_mod": [6, 13], "s_vld": [6, 13], "s_rdy": [6, 13], "s_pld": [6, 13], "m_vld": [6, 13], "m_rdy": [6, 13], "m_pld": [6, 13], "forward_mod": 6, "backward_mod": 6, "full_mod": 6, "bypass_mod": 6, "endgener": 6, "instanc": [6, 13], "slv_aw_pack": 6, "u_rs_gpu_aw": [6, 13], "gpu_aw_vld": [6, 13], "gpu_aw_rdi": [6, 13], "gpu_aw_pld": [6, 13], "gpu_aw_vld_r": [6, 13], "gpu_aw_rdy_r": [6, 13], "gpu_aw_pld_r": [6, 13], "mst_aw_pack": 6, "u_rs_dmc_aw": 6, "dmc_aw_vld": 6, "dmc_aw_rdi": 6, "dmc_aw_pld": 6, "dmc_aw_vld_r": 6, "dmc_aw_rdy_r": 6, "dmc_aw_pld_r": 6, "useful": [6, 13], "exapml": 6, "bacth": 6, "hierarchi": 6, "xxx": 6, "yyi": 6, "gpu_aw_r": 6, "four": [6, 10, 12], "gpu": 6, "request": 6, "path": [6, 12], "genvar": 6, "v_gpu_aw_vld": 6, "v_gpu_aw_rdi": 6, "v_gpu_aw_pld": 6, "v_gpu_aw_vld_r": 6, "v_gpu_aw_rdy_r": 6, "v_gpu_aw_pld_r": 6, "tag": 6, "check": [6, 10], "16": 6, "wai": [6, 10, 12], "tag_check": 6, "v_tag_hit": 6, "v_tag_vld": 6, "v_tag": 6, "req_tag": 6, "pai": [6, 11, 12], "attent": [6, 11, 12], "loop": 6, "declar": [6, 11, 14], "whether": [6, 11], "": [6, 14], "block": [6, 7, 12, 13], "label": 6, "realiz": 6, "increment": 7, "shown": [7, 10, 13], "enable_1": 7, "enable_2": 7, "enable_3": 7, "tab": 7, "look": 7, "similar": 7, "instead": 7, "editor": 7, "automat": [7, 12, 14], "kei": [7, 12], "sub": 7, "These": 7, "few": [7, 14], "pipe": 7, "io": [7, 9, 10, 13, 14], "din0": 7, "dout0": 7, "dout1": 7, "rtl": [7, 9, 10], "form": [7, 11, 14], "convent": 7, "alon": 7, "rest": 7, "keyword": 7, "etc": 7, "sever": [7, 14], "line": [7, 10, 11, 12], "res0": 7, "res32": 7, "din45": 7, "din235": 7, "out_en": 7, "in_en": 7, "out_readi": 7, "out_valid": 7, "out_payload": 7, "u_r": 7, "in_valid": 7, "in_readi": 7, "in_payload": 7, "tutori": 8, "indent": 8, "align": 8, "filelist": [8, 9, 10], "structur": 8, "sequenti": 8, "clock": [8, 12], "constant": 9, "frequent": 9, "them": 9, "A": [9, 10, 14], "special": [9, 13], "includ": 9, "And": [9, 13], "import": [9, 10], "befor": 9, "moudl": 9, "sc_cmn_vr_dec": [9, 10], "scc_param_pkg": [9, 10], "take": [9, 11], "effect": 9, "integ": [9, 10, 11, 14], "becom": 9, "invalid": 9, "advantag": [9, 13], "scope": [9, 10], "clearli": 9, "fix": 9, "insid": 9, "unpredict": 9, "impact": 9, "dut": 9, "effctiv": 9, "we": [10, 12, 14], "know": 10, "directli": [10, 14], "its": [10, 13, 14], "duplic": 10, "renam": 10, "actual": 10, "verilog": [10, 14], "v": 10, "wrong": 10, "becaus": [10, 14], "compil": 10, "determin": 10, "pars": 10, "sinc": 10, "subset": 10, "applic": 10, "contain": 10, "part": 10, "immedi": 10, "limit": 10, "exclud": 10, "submodul": 10, "sake": 10, "uniform": 10, "pleas": [10, 12], "try": 10, "templat": 10, "break": 10, "e": [10, 14], "bracket": 10, "separ": 10, "example1": 11, "example2": 11, "explicitli": [11, 14], "capit": 11, "letter": 11, "show": [11, 13], "onli": [11, 12, 13], "per": 11, "word": 12, "introduc": [12, 13], "indic": 12, "nonblock": [12, 13], "data_d": 12, "data_en": 12, "omit": 12, "last": 12, "regist": [12, 13], "drive": 12, "eda": 12, "insert": 12, "infer": [12, 14], "gate": 12, "cell": 12, "howev": 12, "branch": 12, "But": 12, "still": 12, "mandatori": 12, "high": 12, "speed": 12, "area": 12, "without": 12, "struct": 13, "pack": 13, "length": 13, "significantli": 13, "reduc": 13, "improv": 13, "mainten": 13, "cost": 13, "axi": [13, 14], "aw": 13, "channel": [13, 14], "typedef": 13, "axi_aw_id_width": 13, "id": 13, "axi_aw_addr_width": 13, "axi_aw_len_width": 13, "len": 13, "axi_aw_size_width": 13, "size": 13, "burst": 13, "lock": 13, "prot": 13, "axi_aw_userbit_pack": 13, "axi_aw_pack": 13, "conclud": 13, "nest": 13, "field": 13, "delet": 13, "width": [13, 14], "chang": 13, "updat": 13, "involv": 13, "invok": 13, "both": 13, "pld_buffer": 13, "main": 13, "start": 13, "releat": 13, "fromat": 13, "foramt": 13, "struct_sign": 13, "internal_field": 13, "assigen": 13, "whole": 13, "just": 13, "phase": 13, "goal": 13, "origin": 13, "configur": 13, "valu": [13, 14], "aw_pld_new": 13, "aw_pld": 13, "rf_write_qo": 13, "re": 13, "aw_pld_buff": 13, "bit": [13, 14], "aw_vld": 13, "aw_rdi": 13, "languag": 14, "1bit": 14, "equival": 14, "valid": 14, "unsigend": 14, "specifi": 14, "sometim": 14, "match": 14, "our": 14, "intent": 14, "good": 14, "set": 14, "transmit": 14, "bu": 14, "manner": 14, "awvalid": 14, "awreadi": 14, "awaddr": 14, "in_data": 14, "add": 14, "v_": 14, "vector": 14, "independ": 14, "here": 14, "consist": 14, "en": 14, "so": 14, "consid": 14, "in_v_en": 14, "piec": 14, "appropri": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"clock": 0, "reset": 0, "combin": 1, "logic": [1, 12], "data": 2, "type": 2, "paramet": [2, 11], "sync": 3, "fifo": 3, "exampl": 4, "content": [4, 8], "filelist": 5, "gener": 6, "indent": 7, "align": 7, "rtl": 8, "code": 8, "style": 8, "macro": 9, "do": 9, "us": 9, "definit": [9, 10, 14], "unless": 9, "i": 9, "other": 9, "solut": 9, "problem": 9, "all": 9, "If": 9, "you": 9, "must": [9, 10], "pleas": 9, "strictli": 9, "observ": 9, "follow": 9, "rule": 9, "modul": 10, "name": [10, 14], "file": 10, "same": 10, "sequenti": 12, "structur": 13, "variabl": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Clock and reset": [[0, "clock-and-reset"]], "Clock": [[0, "clock"]], "Reset": [[0, "reset"]], "Combinational logic": [[1, "combinational-logic"]], "Data-type Parameter": [[2, "data-type-parameter"]], "Sync FIFO": [[3, "sync-fifo"]], "Examples": [[4, "examples"]], "Contents": [[4, null], [8, null]], "Filelist": [[5, "filelist"]], "Generate if/for": [[6, "generate-if-for"]], "Indentation and alignment": [[7, "indentation-and-alignment"]], "Indentation": [[7, "indentation"]], "Alignment": [[7, "alignment"]], "RTL Coding Style": [[8, "rtl-coding-style"]], "Macro": [[9, "macro"]], "Do not use macro definitions unless there is no other solution to the problem at all!!!": [[9, "do-not-use-macro-definitions-unless-there-is-no-other-solution-to-the-problem-at-all"]], "If you must use macro, please strictly observe the following rule": [[9, "if-you-must-use-macro-please-strictly-observe-the-following-rule"]], "Module": [[10, "module"]], "Module name and file name must be the same": [[10, "module-name-and-file-name-must-be-the-same"]], "Module definition": [[10, "module-definition"]], "Parameter": [[11, "parameter"]], "Sequential logic": [[12, "sequential-logic"]], "Structure": [[13, "structure"]], "Variable definition and naming": [[14, "variable-definition-and-naming"]]}, "indexentries": {}})