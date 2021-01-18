cmd_Release/addonJ.node := ln -f "Release/obj.target/addonJ.node" "Release/addonJ.node" 2>/dev/null || (rm -rf "Release/addonJ.node" && cp -af "Release/obj.target/addonJ.node" "Release/addonJ.node")
