'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1885ec233380d4129734da880911280b",
".git/config": "643aa94f2de7ccb91627e8abd23343db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5108b29339bee3b85919570613070762",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6ef42c8a78f5a42381c31bb290770b5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb572b302bd8d5e4cfc47d26ee171f9c",
".git/logs/refs/heads/dev": "a169fecc153148ce48b8679368030cb1",
".git/logs/refs/heads/main": "7f55ef199e92fe0fb8880da8d8978e65",
".git/logs/refs/remotes/origin/dev": "b1310e1777a8f4adca8a470b8d9f3a09",
".git/logs/refs/remotes/origin/main": "71e25363cfcbf98753d5a15736c186a0",
".git/objects/00/c91a084f9887151cc8dd24d8bb80a4b251aa52": "fdda0a643348d3a75370ef372406db3a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/04/90f0a142489dc3f785e8adc94f1490596c9863": "036c10e416adf986a9c4f0da3dca905e",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/0e/513f5153a49cf8e8a7a8e6833336203b053a1c": "f56a6b713670a527859dd6a58eb0a086",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/808858ae2220dd4a6ab9f55668571a24342f8b": "a4e3e50d49b0e2d1a314af09db5f1508",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/d63f0c55fc32223296f976e022eb284f0c6a07": "a914818c3edc4c44443127f06c8fcbfd",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/7aa83e4e15273313c1643a8dd32dc30cd01ff0": "8809afb6f795363f2062709093b479e1",
".git/objects/22/7a6ab7ee7d29b872cb1969129653086fbc6ca7": "738674bc923d6acce4394f6a54d7d94a",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/9d4695eed3b8ebf51cb9adadc3ba4a8e964d81": "e6f5653223bfc23ef1f359421e88abd8",
".git/objects/29/580d618b7d7a8113849d8db7cc7a872a788eb0": "c633fbe491126e325027e0f7d7504a03",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "45542fd7e689386f166eed136e1ad478",
".git/objects/2e/c576a9e06ba50c73018ca6d726f06f474d2f81": "44c8fa085e2f6d223ea3046a4a673062",
".git/objects/2e/fdd6f408cd871db407dcae9a306d6ef3704aad": "29cc1b88018f99398005442b3b99987b",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/36/0ffec766284342d72a681387d04e3c89ec85cb": "f5c6118fc5b90f54f5f4a69425e968f5",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/2196b984485e232f56380f9226bafbe0c6378e": "965064f32150373ebdd9ddec7154d257",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3c/414427ffe3a46b44ef8f4a64d8787a136c7c98": "c6cc44aafda96ce602dc02fa629498ca",
".git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "d7b0579a2c9bbcd5f15d386f2b10ecbd",
".git/objects/3d/1f8dfb4996b751c6c9cf5ed5316c20348ace43": "8e4af60030634c844738fbff24425728",
".git/objects/3d/2124cbd01dbe5d0d6a3aff18d71d2ab86525ac": "d1d73c8852ac4a1569d7fdbe9e383143",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/40/b878db5b1c97fc77049537a71bb2e249abe5dc": "7ac7cc11abfb2214472099db6ef6b486",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/44/168444a5d0927a8ab87fbad40a6cd4597a78c8": "571baf2e6d486810ac273c01b68c8b68",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/48/42f9c2cdb5f259db3598bca8e0ba746fec98d4": "bc58bdd10e2ed0233d109308e0bf34b9",
".git/objects/48/641bd0b8845a328fb9278275a1185613f5b412": "7d6f118b201a2ea80582c852196ee045",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/81f9b2d200fc807eed25bca04dff9ee9dcc45f": "a4e42d574e7556e8bbf3743a2640199a",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4f/7884874da74281c7ffe7fa4b936e7b2af92c24": "8a1caa4f3fe1a49906a36e56b210cd33",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/54/18c9f5395573cfd0fb8290b7ac946030f11ec6": "6b7c566b22549c2ea8f5f843db3bdac8",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/a0bd7813e4af8377d19164d9e77aa705ddb9cd": "9f6fe2e88d12156e35689b1f1beba234",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/8d13fee446372f156ecc38527b54c7cdcc8e3b": "a529717b269adbebf0ed465f95357471",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5a/c20fbb255b6c90922d285664ba84a20ebce1e5": "095bc1824ff7d9987253a110bd1e3ea6",
".git/objects/5b/abda80cdb461359dc2ba198ae10a6acf827005": "3305752b164a5440c05cbd96387e4d84",
".git/objects/5c/aa9d1579e481a5894c37e2e56b0da062e95b35": "67f600cccf9a11b58f2712ae63d2646d",
".git/objects/5d/f15b64fa57083b694cac32e8e1c85e94a3bb42": "609ff11bdf2c358262032206de5d4366",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/61/b1bf87d2e8675145dc8ffb4b8a8ef642ca8df9": "9a29f8b4faee863369456bf8675961f8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/026cfa7b1b2f059c4fff81de669e9921635b58": "61ad6d3f70220e286481d5946148b7a9",
".git/objects/64/f46aa7065bf686cc96d2b2bb28e096804b2450": "b788719c83da3c053f78fb34d02fbd94",
".git/objects/65/66baf80e695a8b8f91f6cdcd48ca0e9270a0c1": "c60a8413b0c396232eaaad1bbd57635c",
".git/objects/65/92c232a9979a0d210475c490679fb45e9fb957": "82110fcd04e52fd76f7211ef9c684532",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/67/4456f05e67227287a9f35c07c95eb7793c59ba": "ebc71e8e16d57945f6a56eee33accc00",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/074bf3a6bcc6e131c384d17785f36220df82bd": "14caac437bdaed4a13a7726ea2dab41f",
".git/objects/6b/73452faacddbf689b52deb73946918284cfeef": "4ee753ed3d1e3191885dc5c10a74c944",
".git/objects/6b/b9b71c021b98eeb77f0981ead165e415dabc07": "6622c1c0e039f16cfacba8dc26df348b",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/72/5eabe8401e6b788832beefa27fccaa417dbe80": "25e3792c24fd2dc8c420bd03f7e82465",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/73/a0b38d93bf53d9e8f666bb27d98731fdf9f3f1": "c9ced1399949bae94745eab799101b9e",
".git/objects/73/c73f811ea85a0df726937c1a836ee34393e87d": "e5646e1f09d3bde42d87167ddfe97e5f",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/74/b8bfd300bfbc499de8dbae4fdfd3d617aa2e0e": "868d0de832d79a3bf9e75df4e9a94bc6",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7c/d7128551bb8e1c5cdf8bdade409ae795e3aef9": "87febac808fd62e27a459f1c70e72841",
".git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
".git/objects/80/233c3fedd1ba7fab4853131f03f88edbc2929e": "4953530c247a34432e5f2cafb45e674b",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/82/36f5728c63e5c23669d097ca1aa74d0058a88b": "68e08df1b04fc72bbb0d69d2d2aed58f",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/83/c8b47503490a43de2ff308f8d1a26c48e2882b": "e40d55d035dcb7979ff00bf20f177f26",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/b16349d5b545b41894932440b728fe0055ddbe": "ae498bf501e16d35c591f3bf4b4d9d7b",
".git/objects/85/bca66fb05981ef0a997c7931987dccc2a29c91": "d2af863d63e279e35ae4fd6d7fdb7fc6",
".git/objects/85/ff70b84fbd371c497c883fcb18f5ab01474f82": "d6311bbabc20fe0faf2e2c5e1c8a0d1d",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/87/131a09bea5deaa0b3f084a9f03b5d2e4422b84": "8fad9adb8649dec0b53da0fe81c80906",
".git/objects/88/b22e5c775e5e83b1bb9140b0d1c0c38c2871a0": "11f6f26b227c21fc729a3cf09ce66310",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8c/c26ee0a61bb06738a7295877d9cdd66572d92d": "6a7615f3525583b0a3d300bef9a9c6ac",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "83b7d85886d6c364db4cef0543e046ee",
".git/objects/91/5be6cdeb91364d042530777a2ee8afd7431fab": "886af6ee1072a782c711ad160a76ab8f",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/92/3339823f6f56c3b9c0d42ec07c381a99a9a348": "2ae1614477c0f0453817ad21b070c634",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
".git/objects/99/9ddd97c8f85321472c16bdfbcd0c5e133464f9": "d78af6f8dfb6fe5a54d386f0b626387a",
".git/objects/99/dbd0ae387a1e380e0d146587491cd02d7eea9c": "32ff8192c09cca54a45ea05d31ece3eb",
".git/objects/9c/333b7eaf77bc7b2433f54ecc6e0a3c4f0be3dc": "517facb50a69ce4057f37291202b9e7c",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/35c40a0ef11eecdcbaf2cc99b6fa92a92f67df": "2b8c3dbe6e79fb8f976c456137107065",
".git/objects/9f/1439435c59821b65769b73cb501e664d6980e9": "ccd0a1d6314ca39b32680c567f99c35e",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a3/f2bb86767b24122b9d12f38e13fc010db5b93c": "8547902bff72a13ac5605354c4646737",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a4/674a4e88fa958e69f17890419b81579046d043": "023ad2794ee21f1ab2ec31e66a9015aa",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a5/785e85f5c807832a709f120d29011b2ebd74bb": "de73462d7e3010cf0a106ec8eab41e14",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a9/1896b728806945f60dddc87343e409c3efaf22": "c114581d83c647f5de62552b5c31e66a",
".git/objects/aa/5d14b04b57a138ecd57d2292a58d364f7c40d6": "5408b19555d4d7ec1b88c4f3bb9739de",
".git/objects/b1/7050e2a59fb92d45d60bb89a027b7a7da49df7": "5e3d635a5c0164d77d9f59b4599b6820",
".git/objects/b2/b08734db2bf90568fb1980bf46e0f42aea5856": "b1435b52c5abfab429aeb92797b5429b",
".git/objects/b3/2b66ff8341dc4aec593f2090a3a2749bc3b774": "ddfad72578cba2637f14df2521ce5050",
".git/objects/b3/3c32dc508a70bce6e430ff27804155d2e8892d": "dfd49602fa154360e02135233d16bc4f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/0ff08b4c330e9f1832030024f8aaa707b0be5e": "d208325274b0a6005ceb6b8bc5180f2d",
".git/objects/b6/152a8905bac765c8bf21750f7ce8b7ef9742e8": "50a87564380b3a0b15e8a96579715520",
".git/objects/b6/7c69e242d3b1d3d4c9306e1298d0826d2e25e1": "a1f1e2dc0c544711c8b18abe724e07ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df9b22de31cd24565f357e975b7cac81338103": "70319135c186144acbfb126d1353d230",
".git/objects/b8/451c6d5c424a4bcfed3353752f675980ed662b": "35acf8a1fa8f1b2cb9eabff076c29601",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bd/09a5df9d93e8ea7bc415e09af8557df0e4c84f": "04c419c8973053b4781c7a0d8b98e162",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/bf/f5f99727cdffedff0eb46aae4ace3065b428ce": "403ee247fd13bfb64e45c6f9d7b36854",
".git/objects/c0/1f957c04a99fd724cbd90be909d042fc4ccd05": "bcbcc52012f1bb5f460518dda27e014e",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c1/7dc85be3d8e1b4800bda5a7f580af68cfa7313": "a22a8ca4ac412439fbfb3b69e2c14803",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/855bfe2000b73c8a50783b40073676021cbb68": "8fbb098710d67c97c926322288a13218",
".git/objects/c5/1516b2493b027006f601aaf3ed54350f7083f2": "43e9b5abe4c47f8743048a841e4bd94c",
".git/objects/c7/95730db8edb4751a1c18bff5cb2622133a2c68": "c61c1e4053e26a816674721c5581be0c",
".git/objects/c8/6e52b5e50ef5eacee9bebd703ae601d7174ef3": "031b8fffaf8d718dc90bce17a72eb74b",
".git/objects/c8/8e3535f912c812d2eeea7b68f99313989a6615": "f49a56702b28d31e90c03ddf0b04f895",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/c302db2ed9036cd126a414d5edb7f8134f3db0": "c108040c8cc55b04e0d9d89a55749a0c",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/0feb6199c501e2fb1900b4fe1b26145496b347": "db17e53fc88562b538bc570aa949784a",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/8a823b4e72eb986a5e34d05c3461a6841c523d": "22382b5c51916eb51ae93d4251d5383a",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/4de09189bb85ac4e4f5feb4a876029deed2e9e": "6af5bdb0fe7d09b110a5206e88088a3c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d8/11440d4ba1e669a19a2915627a63982a792f96": "a5f0bcb47e29a6204ff9cab5e717dd54",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/35aef158aab97b2df4a3e459fc7e32974b9535": "6ca2b161ba0e4806a6fef01ccfc480fe",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/b6cdeb5eaaa4ff7d5624d72b119e105b497b2f": "3d51e45567f058103aaec03af92b3c55",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e2/bf10080f65d7cbdf94109351e9a26511ab9f49": "89319a5d81f84ff13b8283fc4c4d4b87",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e8/1477f69a09cf196ad5b39801d73aee6e3ccca8": "e9df690a01667349b75cc6e337530ab4",
".git/objects/e8/3fb5daca3e3c5cb366428e16d6ddbd33f81997": "3eeae49fd9523aec10901a5cc5766342",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/97fc6f30212d34d53ab17751bcabdfab1891d4": "16ba82e7bda0130e1d8a3a46bda084f0",
".git/objects/ee/0783630b5eb05738132ceb487d039ce0144ed1": "59d7a5ca56fda09c8d275141ed2069c4",
".git/objects/ee/684c0967ea3957bc5b2f63735d043ab7405ca8": "17c2b092e27fdc22138b3c5bdd92f25b",
".git/objects/ef/96056c7cc6155f1c8c1b36158d4cdfd5c0b492": "b7e44fab673336bcf2a69c9e29f2bf36",
".git/objects/ef/a8810f3206d29ec01408df6bbb5b19504283e4": "305dd44bb1e07ec35bb1c81bf6f7d54e",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f1/6b4c34213acd9dbc719b4548786853e6e9503b": "152df85019e8b7b2580c77fc34d7f4ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f6/f23bfe970ffe22ab2e64b10b6ae24575915cda": "076d4adec06322b02289ceda5b4dba96",
".git/objects/f7/03ecf4f258ebefd18a7dd46c84841e352393a6": "acd03dce900432c6f9d1663e6eb6c4df",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fd/9a3ddcaaf5f3b66b467749b308aaff3bfbbd7a": "72bcc3ac98c3ca7f8342ea37591ebbf0",
".git/objects/fd/cc671eb341ce7e265c9d408047fee22e2453d1": "04d756d5d309c525299fdd83110918fe",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/objects/ff/2d6f1513af08ada8ee5a9746bc58927997a2c0": "fb995304b120ab4069baee14738658a5",
".git/refs/heads/dev": "fd42c2b207ef4234bd602c8c37efb35e",
".git/refs/heads/main": "fd42c2b207ef4234bd602c8c37efb35e",
".git/refs/remotes/origin/dev": "84ca37196e3d0ac693a97c0792e5e321",
".git/refs/remotes/origin/main": "fd42c2b207ef4234bd602c8c37efb35e",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eabcd917809739b06b829bb2541fe263",
"assets/NOTICES": "4fcc0de8aac18833cd5739fcee2c3a34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "de41d78b270289ea63433b51795f2021",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88c3435e2de156473fd9a08e81c9bc0a",
"/": "88c3435e2de156473fd9a08e81c9bc0a",
"main.dart.js": "9c71fc8e6df064d2c242215ad1285f21",
"manifest.json": "8b5e2b9f9f49100a70664e81832ad99f",
"version.json": "89f7d6aaec375ee08e8e71da1895ec51"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
