;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-guanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.040704 346.648576c-22.464512-22.515712-30.198784-15.367168-60.398592 14.88384l-9.5488-9.566208L455.612416 759.534592 409.82016 870.21568l105.673728-42.735616 411.22816-410.710016-9.531392-9.566208C947.391488 376.935424 954.522624 369.181696 932.040704 346.648576zM502.112256 802.01216l-2.953216 1.190912-22.480896-22.53312 1.190912-2.953216L862.11072 392.45824l24.242176 24.311808L502.112256 802.01216z"  ></path>' +
    '' +
    '<path d="M194.56 236.032 753.664 236.032 753.664 403.968 782.336 403.968 782.336 207.36 165.888 207.36 165.888 824.832 410.624 824.832 410.624 796.16 194.56 796.16Z"  ></path>' +
    '' +
    '<path d="M350.208 367.104l304.128 0 0 36.864-304.128 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M285.696 366.08l36.864 0 0 36.864-36.864 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M350.208 479.744l304.128 0 0 36.864-304.128 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M285.696 478.72l36.864 0 0 36.864-36.864 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M350.208 597.504l190.464 0 0 36.864-190.464 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M285.696 596.48l36.864 0 0 36.864-36.864 0 0-36.864Z"  ></path>' +
    '' +
    '<path d="M753.664 796.16 608.256 796.16 608.256 824.832 782.336 824.832 782.336 660.992 753.664 660.992Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontcolor11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M939.264 84.72c-112.464-112.464-294.832-112.464-407.296 0-84.096 84.096-105.264 207.248-63.6 311.056-2.016 1.264-3.952 2.704-5.696 4.448L23.008 839.888c-12.448 12.448-22.624 37.024-22.624 54.624l0 97.168c0 17.6 14.4 31.984 32 31.952l97.312-0.176c17.6-0.032 32-14.448 32-32.048l0-93.552c0-17.6 14.4-32 32-32l93.536 0c17.6 0 32.016-14.4 32.048-32l0.16-93.792c0.032-17.6 14.448-32 32.048-32l93.552 0c17.6 0 42.176-10.176 54.624-22.624l124.096-124.112c1.744-1.744 3.184-3.664 4.432-5.68 103.808 41.664 226.96 20.496 311.056-63.6C1051.728 379.552 1051.728 197.184 939.264 84.72zM905.328 277.056c-43.728 43.728-114.656 43.728-158.384 0s-43.728-114.656 0-158.384 114.656-43.728 158.384 0S949.056 233.328 905.328 277.056z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-next" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672 512l-384 384c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l403.2-403.2c6.4-6.4 12.8-19.2 12.8-25.6 0-6.4 0-19.2-6.4-25.6L332.8 83.2C320 70.4 300.8 70.4 288 83.2S275.2 115.2 288 128L672 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pre" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M352 512l384-384c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L288 486.4C281.6 492.8 275.2 505.6 275.2 512c0 6.4 0 19.2 6.4 25.6l409.6 409.6c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L352 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chacha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M964.794062 100.92562 923.057495 59.190077 511.999488 470.263433 100.938412 59.190077 59.203892 100.92562 470.263945 512 59.232544 923.045727 100.968088 964.78127 511.999488 553.736567 923.057495 964.8089 964.794062 923.073356 553.732985 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-laji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M478.817 289.946c0-20.188 16.543-36.451 36.45-36.451l0 0c19.907 0 36.452 16.542 36.452 36.451l0 552.932c0 20.187-16.545 36.451-36.452 36.451l0 0c-20.188 0-36.45-16.544-36.45-36.451L478.817 289.946 478.817 289.946zM306.938 289.946c0-20.188 16.263-36.451 36.451-36.451l0 0c20.188 0 36.45 16.542 36.45 36.451l0 552.932c0 20.187-16.542 36.451-36.45 36.451l0 0c-20.188 0-36.451-16.544-36.451-36.451L306.938 289.946 306.938 289.946zM650.417 289.946c0-20.188 16.543-36.451 36.45-36.451l0 0c20.189 0 36.451 16.542 36.451 36.451l0 552.932c0 20.187-16.544 36.451-36.451 36.451l0 0c-19.907 0-36.45-16.544-36.45-36.451L650.417 289.946 650.417 289.946zM952.68 110.776 809.118 110.776l-52.433 0L756.685 64.791c0-35.609-31.965-63.648-72.901-63.648L346.473 1.143c-40.938 0-72.901 28.039-72.901 63.648l0 45.705-52.434 0L71.688 110.496c-20.188 0-36.45 16.262-36.45 36.451s16.263 36.451 36.45 36.451l76.828 0L148.516 952.23c0 39.254 32.806 71.22 72.901 71.22l587.981 0c40.096 0 72.901-31.966 72.901-71.22L882.299 183.678l70.379 0c20.187 0 36.449-16.263 36.449-36.451C989.129 127.038 972.866 110.776 952.68 110.776L952.68 110.776zM346.473 74.324l337.311 0 0 36.452L346.473 110.776 346.473 74.324 346.473 74.324zM770.704 950.827c0 0-471.617 1.684-511.713 1.684s-37.853-41.218-37.853-41.218L221.138 218.727c0-42.06 35.609-35.049 35.609-35.049l89.726 0 337.311 0 82.436 0c0 0 42.899-2.524 42.899 35.049 0 37.572 0.561 660.882 0.561 696.212C809.679 949.987 770.704 950.827 770.704 950.827L770.704 950.827z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tongjifenxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M575.593931 93.431172c-17.655172 0-31.991172 14.336-31.991172 31.991172s14.336 31.991172 31.991172 31.991172c226.480552 0 384.423724 165.464276 384.423724 391.909517 0 226.480552-184.214069 410.694621-410.694621 410.694621-226.409931 0-391.909517-163.592828-391.909517-390.073379 0-17.655172-14.336-31.991172-31.991172-31.991172s-31.991172 14.336-31.991172 31.991172C93.431172 831.699862 287.602759 1024 549.323034 1024 811.078621 1024 1024 811.078621 1024 549.323034 1024 287.602759 837.314207 93.431172 575.593931 93.431172zM480.256 448.229517 480.256 31.991172C480.256 14.30069 465.92 0 448.229517 0 199.009103 0 0 199.009103 0 448.229517c0 17.690483 14.336 31.991172 31.991172 31.991172l416.238345 0C465.92 480.256 480.256 465.92 480.256 448.229517zM416.238345 416.238345 65.324138 416.238345C80.754759 227.751724 227.751724 80.754759 416.238345 65.324138L416.238345 416.238345z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhifufangshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.686075 63.10934c-247.473301 0-448.840518 201.039759-448.840518 448.176392s201.3621 448.181509 448.840518 448.181509c247.472278 0 448.839495-201.044876 448.839495-448.181509S758.162446 63.10934 510.686075 63.10934L510.686075 63.10934 510.686075 63.10934 510.686075 63.10934 510.686075 63.10934 510.686075 63.10934zM510.686075 911.385153c-220.932832 0-400.662239-179.492-400.662239-400.099421 0-220.612537 179.729407-400.078954 400.662239-400.078954 220.931808 0 400.661216 179.466418 400.661216 400.078954S731.617883 911.385153 510.686075 911.385153L510.686075 911.385153 510.686075 911.385153 510.686075 911.385153 510.686075 911.385153 510.686075 911.385153zM619.266026 276.854469l-71.278393 131.145899c-19.022239 35.533284-30.617321 59.173704-34.874275 70.867024l-1.238201 0c-12.524245-28.465309-47.892777-95.782483-106.132202-202.012923l-67.041906 0 124.665301 213.826993-102.217033 0 0 47.27163 119.816876 0 0 65.107857L361.15341 603.060949l0 47.828308 119.816876 0 0 94.828762 59.438741 0 0-94.833879 115.585505 0 0-47.823192L540.41005 603.060949l0-65.107857 115.585505 0 0-47.27163L556.805462 490.681462l125.864616-213.826993L619.266026 276.854469 619.266026 276.854469 619.266026 276.854469 619.266026 276.854469 619.266026 276.854469 619.266026 276.854469zM619.266026 276.854469"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caozuorizhi01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M291.473933 408.462902c0 10.035564 8.149611 18.150382 18.222013 18.150382l400.515906 0c10.07138 0 18.222013-8.114818 18.222013-18.150382 0-10.107195-8.150634-18.222013-18.222013-18.222013L309.695946 390.240889C299.623543 390.241912 291.473933 398.355707 291.473933 408.462902zM710.210829 529.820877 309.695946 529.820877c-10.07138 0-18.222013 8.113795-18.222013 18.22099 0 10.036587 8.149611 18.222013 18.222013 18.222013l400.515906 0c10.07138 0 18.222013-8.185426 18.222013-18.222013C728.432843 537.934672 720.282209 529.820877 710.210829 529.820877zM710.210829 669.542082 309.695946 669.542082c-10.07138 0-18.222013 8.113795-18.222013 18.22099 0 10.036587 8.149611 18.222013 18.222013 18.222013l400.515906 0c10.07138 0 18.222013-8.185426 18.222013-18.222013C728.432843 677.655877 720.282209 669.542082 710.210829 669.542082zM837.689199 129.162732 673.803641 129.162732 673.803641 92.720751c0-10.107195-8.149611-18.222013-18.185174-18.222013L364.288309 74.498738c-10.036587 0-18.185174 8.114818-18.185174 18.222013l0 36.443004L182.216553 129.163755c-10.036587 0-18.186198 8.113795-18.186198 18.22099l0 783.235494c0 10.036587 8.149611 18.222013 18.186198 18.222013l655.472646 0c10.036587 0 18.185174-8.185426 18.185174-18.222013L855.874373 147.384745C855.875396 137.27755 847.725786 129.162732 837.689199 129.162732zM382.510322 110.941741l254.886131 0 0 72.814376L382.510322 183.756117 382.510322 110.941741zM819.468209 912.399249 200.438567 912.399249 200.438567 165.534104l145.664567 0 0 36.443004c0 10.107195 8.149611 18.222013 18.185174 18.222013l291.329135 0c10.036587 0 18.185174-8.114818 18.185174-18.222013l0-36.443004 145.664567 0L819.467185 912.399249z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 97.524c-229.361 0-414.476 186.018-414.476 414.476s186.018 414.476 414.476 414.476 414.476-186.018 414.476-414.476-185.115-414.476-414.476-414.476zM658.286 534.575l-205.883 206.787c-6.321 6.321-14.448 9.030-22.575 9.030s-16.254-2.709-22.575-9.030c-12.642-12.642-12.642-32.508 0-45.15l184.212-184.212-183.309-181.503c-12.642-12.642-12.642-32.508 0-44.246 12.642-12.642 32.508-12.642 44.246 0l205.884 204.078c6.321 6.321 9.030 13.545 9.030 22.575 0 7.224-2.709 15.351-9.030 21.672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M810.666667 554.666667 213.333333 554.666667l0-85.333333 597.333333 0L810.666667 554.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 926.476c229.361 0 414.476-186.018 414.476-414.476s-186.018-414.476-414.476-414.476-414.476 186.018-414.476 414.476 185.115 414.476 414.476 414.476zM365.714 489.425l205.883-206.787c6.321-6.321 14.448-9.030 22.575-9.030s16.254 2.709 22.575 9.030c12.642 12.642 12.642 32.508 0 45.15l-184.212 184.212 183.309 181.503c12.642 12.642 12.642 32.508 0 44.246-12.642 12.642-32.508 12.642-44.246 0l-205.884-204.078c-6.321-6.321-9.030-13.545-9.030-22.575 0-7.224 2.709-15.351 9.030-21.672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mendianguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.852408 642.909339c-12.362798 0-22.326183 10.056302-22.326183 22.41906L869.526225 889.248482c0 12.407688-10.05928 22.41902-22.422058 22.41902L175.280604 911.667501c-12.362798 0-22.396095-10.011332-22.396095-22.41902L152.884508 665.328399c0-12.362758-10.033837-22.41906-22.396595-22.41906-12.363278 0-22.396095 10.056302-22.396095 22.41906L108.091818 889.248482c0 37.089313 30.145441 67.211231 67.188806 67.211231l671.823564 0c37.044344 0 67.166341-30.121917 67.166341-67.211231L914.270529 665.328399c0-12.362758-10.054363-22.41906-22.372092-22.41906L891.852408 642.909339zM958.833795 305.347386c-0.277772-9.271834-2.582229-18.406261-6.826392-27.193403l0.183855-0.16191c0 0-106.099465-181.247434-106.838963-182.677465-9.77845-18.890932-20.390395-34.621467-66.151949-34.621467L243.092467 60.693142c-37.59649 0-54.618649 15.523175-68.596372 38.842165l-102.571277 175.158463-0.161391 0.438223c0 0.138406 0 0.276812 0 0.36875-5.143073 9.619098-7.93472 19.6749-8.326455 30.100972-0.069453 0.207359-0.16189 0.507156-0.16189 0.876426l0 156.521379c0 74.547897 57.755582 135.16258 128.774331 135.16258 42.647145 0 82.296763-22.05033 106.377256-59.091696 24.057469 37.041366 63.706107 59.091696 106.353752 59.091696 42.671609 0 82.298741-22.05033 106.378236-59.091696 24.103978 37.041366 63.683623 59.091696 106.40122 59.091696 42.624621 0 82.296243-22.05033 106.378276-59.091696 24.033006 37.041366 63.659659 59.091696 106.375218 59.091696 70.950795 0 128.706337-60.614683 128.706337-135.16258l0-156.521379C959.064658 306.10887 958.97378 305.786089 958.833795 305.347386L958.833795 305.347386zM214.722342 123.684734c6.965357-11.439884 15.17689-16.099285 28.393609-16.099285l536.133382 0c13.604916 0 19.558 1.384082 28.367087 16.0763 16.23821 26.963559 62.048791 103.379229 69.473837 115.742507L145.295034 239.404256C152.699614 227.017494 198.461167 150.37148 214.722342 123.684734L214.722342 123.684734zM914.270509 462.999518c0 48.644639-37.641979 88.248807-83.957137 88.248807-46.316178 0-83.958156-39.627153-83.958156-88.248807l0-22.327682c0-12.939387-10.055283-23.456876-22.417061-23.456876-12.363797 0-22.37413 10.517469-22.37413 23.456876l0 22.327682c0 48.644639-37.688987 88.248807-84.004145 88.248807-46.316178 0-83.958156-39.627153-83.958156-88.248807l0-22.327682c0-12.939387-10.033317-23.456876-22.397075-23.456876-12.362798 0-22.397115 10.517469-22.397115 23.456876l0 22.327682c0 48.644639-37.664923 88.248807-83.980141 88.248807s-83.981141-39.627153-83.981141-88.248807l0-22.327682c0-12.939387-10.033317-23.456876-22.373591-23.456876-12.339794 0-22.373611 10.517469-22.373611 23.456876l0 22.327682c0 48.644639-37.688427 88.248807-83.981121 88.248807-46.315198 0-83.980641-39.627153-83.980641-88.248807l0-156.244566c0.438203-11.486852 9.687552-20.459389 21.036018-20.459389l764.110213 0c11.392356 0 20.618281 8.972537 21.035978 20.41292l0 156.291055L914.270509 462.999538z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconuser" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M498.898 537.705c142.24 0 258.002-113.424 258.002-252.864 0-139.417-115.762-252.839-258.002-252.839-142.24 0-257.978 113.447-257.978 252.839 0 139.415 115.737 252.864 257.978 252.864v0zM399.961 584c-179.653 0-313.783 121.152-313.783 297.097v18.935c0 91.968 143.761 91.968 325.731 91.968h193.314c174.802 0 325.755 0 325.755-91.968v-18.935c0-175.92-134.154-297.097-313.783-297.097h-217.235z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontdingdanguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M858.640689 0 230.965905 0C185.501686 0 148.478082 37.023604 148.478082 82.679655l0 16.497565-16.497565 0C104.740352 99.17722 82.487823 121.237917 82.487823 148.478082c0 27.240165 22.252529 49.492694 49.492694 49.492694l16.497565 0L148.478082 462.315474l-16.497565 0C104.740352 462.315474 82.487823 484.376171 82.487823 511.808168c0 27.431997 22.252529 49.492694 49.492694 49.492694l16.497565 0 0 264.152866-16.497565 0C104.740352 825.64556 82.487823 847.898089 82.487823 875.138254c0 27.431997 22.252529 49.492694 49.492694 49.492694l16.497565 0 0 16.497565c0 45.464219 37.023604 82.679655 82.679655 82.679655l627.482952 0c45.464219 0 82.679655-37.023604 82.679655-82.679655L941.320345 82.679655C940.93668 37.023604 904.104908 0 858.640689 0L858.640689 0 858.640689 0zM115.482952 148.478082c0-9.016111 7.481454-16.497565 16.497565-16.497565l66.182091 0c9.016111 0 16.497565 7.481454 16.497565 16.497565 0 9.016111-7.481454 16.497565-16.497565 16.497565L131.980517 164.975646C122.772574 164.975646 115.482952 157.877857 115.482952 148.478082L115.482952 148.478082zM115.482952 511.808168c0-9.016111 7.481454-16.497565 16.497565-16.497565l66.182091 0c9.016111 0 16.497565 7.481454 16.497565 16.497565 0 9.016111-7.481454 16.497565-16.497565 16.497565L131.980517 528.305732C122.772574 528.305732 115.482952 521.016111 115.482952 511.808168L115.482952 511.808168zM115.482952 875.138254c0-9.016111 7.481454-16.497565 16.497565-16.497565l66.182091 0c9.016111 0 16.497565 7.481454 16.497565 16.497565 0 9.016111-7.481454 16.497565-16.497565 16.497565L131.980517 891.635819C122.772574 891.827651 115.482952 884.346197 115.482952 875.138254L115.482952 875.138254zM907.941551 941.128513c0 27.431997-22.252529 49.492694-49.492694 49.492694l-627.29112 0c-27.431997 0-49.492694-22.252529-49.492694-49.492694L181.665043 924.630948l16.497565 0c27.431997 0 49.492694-22.252529 49.492694-49.492694 0-27.431997-22.252529-49.492694-49.492694-49.492694l-16.497565 0L181.665043 561.492694l16.497565 0c27.431997 0 49.492694-22.252529 49.492694-49.492694 0-27.431997-22.252529-49.492694-49.492694-49.492694l-16.497565 0L181.665043 198.162608l16.497565 0c27.431997 0 49.492694-22.252529 49.492694-49.492694 0-27.431997-22.252529-49.492694-49.492694-49.492694l-16.497565 0 0-16.305732c0-27.431997 22.252529-49.492694 49.492694-49.492694l627.482952 0c27.431997 0 49.492694 22.252529 49.492694 49.492694L907.941551 941.128513 907.941551 941.128513 907.941551 941.128513z"  ></path>' +
    '' +
    '<path d="M346.640689 908.133383l462.315474 0L808.956163 676.975646l-462.315474 0L346.640689 908.133383 346.640689 908.133383zM379.827651 709.970776l396.133383 0 0 164.975646L379.827651 874.946422 379.827651 709.970776 379.827651 709.970776z"  ></path>' +
    '' +
    '<path d="M561.300862 577.990259 594.295991 577.990259 594.295991 610.985388 561.300862 610.985388 561.300862 577.990259Z"  ></path>' +
    '' +
    '<path d="M627.482952 577.990259 660.478082 577.990259 660.478082 610.985388 627.482952 610.985388 627.482952 577.990259Z"  ></path>' +
    '' +
    '<path d="M495.310603 577.990259 528.305732 577.990259 528.305732 610.985388 495.310603 610.985388 495.310603 577.990259Z"  ></path>' +
    '' +
    '<path d="M771.16523 176.677407 747.761709 153.273885 495.310603 405.916823 407.835144 318.633196 384.623454 342.036718 495.310603 452.532034 771.16523 176.677407Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhanghao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1022.667028 501.154937c0-55.686252-10.706434-110.306125-28.89884-162.771916-22.479245-62.105846-54.619874-116.72572-98.490659-165.97105-57.840335-64.25993-128.519859-112.438881-209.905817-142.425426-38.560223-13.926895-78.165497-22.500573-119.946181-26.766084-13.905567-1.066378-27.832462-2.132756-41.738029-2.132756-2.175411 0-5.374544-1.066378-7.5073-1.066378-2.175411 0-5.374544 0-7.528628 0s-4.265511 1.066378-6.419595 1.066378c-55.664924 1.066378-110.284798 10.685106-162.771916 29.986545-62.105846 22.479245-116.72572 54.598546-165.992377 98.511986-65.326307 56.752629-113.483931 127.432154-143.470477 208.818112-13.926895 38.560223-22.500573 79.253202-26.787412 119.946181-1.066378 13.926895-2.154083 27.85379-2.154083 42.847062 0 2.132756 0 5.331889-1.066378 7.5073 0 2.132756 0 5.331889 0 7.5073 0 2.132756 1.066378 4.265511 1.066378 6.419595 1.087705 55.686252 10.706434 110.306125 29.986545 162.771916 21.412867 58.906713 51.378085 111.372503 92.071064 158.485077 58.906713 68.525441 130.652615 118.879803 215.237706 148.845021 38.581551 13.926895 79.27453 23.566951 119.946181 27.875117 13.926895 1.04505 27.85379 2.132756 41.759357 2.132756 2.154083 0 5.374544 1.087705 7.5073 1.087705 2.154083 0 5.374544 0 7.5073 0 2.154083 0 4.286839-1.087705 6.419595-1.087705 55.686252-1.087705 110.306125-10.706434 162.771916-29.986545 62.105846-22.479245 116.747048-54.598546 165.992377-98.511986 65.326307-57.819007 112.417554-127.432154 142.404099-208.796784 13.926895-38.560223 23.566951-79.253202 27.875117-119.946181 1.066378-13.905567 2.132756-27.832462 2.132756-42.825735 0-2.154083 0-5.353217 1.087705-7.5073 0-2.132756 0-5.353217 0-7.5073C1023.754733 505.441776 1022.667028 503.287693 1022.667028 501.154937zM506.518818 980.897007c-259.129819-3.220461-466.881553-215.280362-463.661092-474.410181 3.199134-259.108491 215.237706-466.881553 475.455231-463.661092 259.151147 3.220461 466.90288 216.325412 463.682419 474.388853C977.708537 776.344407 765.669964 984.117468 506.518818 980.897007z"  ></path>' +
    '' +
    '<path d="M717.768271 613.764439c-29.090788-31.010268-63.598775-54.705184-102.777498-70.636869 46.984608-31.074251 74.902381-74.155916 83.070835-128.178618 7.955179-51.25012-4.308167-97.658884-36.534105-137.925312-48.050986-59.247954-111.308521-82.836232-188.023744-69.079958-46.494075 8.872264-84.755712 33.334972-113.633224 72.662987-32.929748 44.276009-43.273613 94.395768-30.775665 148.951659 10.791744 48.434882 38.218982 87.037761 80.895424 114.358361-41.396788 16.272926-76.757878 40.884927-105.208839 73.281486-45.363714 50.887551-67.970925 109.175765-69.101285 178.405015 0 15.739737 10.109262 26.744757 24.590673 26.744757 14.374773 0 25.635724-11.282278 25.635724-25.657051 0-8.253765 0.853102-15.654427 1.74886-23.694916l0.319913-2.79391c6.206319-48.584175 26.126257-90.492825 59.141316-124.510278 57.115198-58.160248 127.410826-80.916752 206.813321-67.672339 63.342845 11.239623 111.84171 43.060338 148.33316 97.274988 23.289692 33.953471 35.61702 74.518485 36.683398 120.330077 0 15.121238 10.557141 25.657051 25.678379 25.657051 14.246808 0 24.569346-10.791744 24.569346-25.657051 0-24.377398-3.284444-47.731073-10.002624-71.234041C768.378564 683.228292 747.733489 646.033033 717.768271 613.764439zM614.862808 475.28461c-21.263574 27.085998-49.053381 42.207236-85.011643 46.323454-73.110866 9.128194-139.716827-39.157395-153.110533-108.066732-9.853331-53.08429 7.677921-99.151813 50.802241-133.211922 23.076417-18.469664 49.58657-27.597859 83.433403-28.728219 60.612917 0.063983 113.228001 37.941724 131.015183 94.246475C656.686148 392.896257 647.643263 436.340491 614.862808 475.28461z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M763.902976 464.586752h-205.68064V258.914304c0-16.954368-13.746176-30.69952-30.700544-30.69952-16.956416 0-30.700544 13.745152-30.700544 30.69952v205.672448H291.13856c-16.955392 0-30.700544 13.745152-30.700544 30.69952s13.745152 30.69952 30.69952 30.69952h205.682688V731.65824c0 16.953344 13.745152 30.69952 30.69952 30.69952 16.955392 0 30.701568-13.746176 30.701568-30.69952V525.985792h205.68064c16.954368 0 30.69952-13.745152 30.69952-30.69952s-13.744128-30.69952-30.69952-30.69952z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiamengguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M619.008 65.536c-139.776 0-253.44 113.664-253.44 253.44 0 96.768 54.272 180.736 134.144 223.232-165.888 51.2-286.72 205.824-286.72 388.096 0 13.312 10.752 24.064 24.064 24.064s24.064-10.752 24.064-24.064c0-197.12 160.768-357.888 355.84-357.888 1.536 0 3.584-0.512 5.12-0.512 138.24-1.536 250.368-114.688 250.368-253.44 0-139.264-113.664-252.928-253.44-252.928z m0 458.24c-113.152 0-204.8-92.16-204.8-204.8 0-113.152 92.16-204.8 204.8-204.8 113.152 0 204.8 92.16 204.8 204.8 0 113.152-91.648 204.8-204.8 204.8z" fill="" ></path>' +
    '' +
    '<path d="M338.944 554.496c-155.136 0-281.6 134.144-281.6 299.52 0 13.312-10.752 24.064-24.064 24.064S9.216 867.328 9.216 854.016c0-153.088 94.72-283.648 225.28-329.728-61.44-37.888-102.912-108.032-102.912-188.416 0-120.32 93.184-218.624 207.36-218.624 13.312 0 24.064 10.752 24.064 24.064s-10.752 24.064-24.064 24.064c-87.552 0-159.232 76.288-159.232 169.984 0 93.696 71.168 169.984 159.232 169.984 13.312 0 24.064 10.752 24.064 24.064 0 14.336-10.752 25.088-24.064 25.088zM986.624 798.72H855.552v130.048c0 14.336-11.776 26.112-26.112 26.112-14.336 0-26.112-11.776-26.112-26.112V798.72H672.256c-14.336 0-26.112-11.776-26.112-26.112 0-14.336 11.776-26.112 26.112-26.112h131.072V616.448c0-14.336 11.776-26.112 26.112-26.112 14.336 0 26.112 11.776 26.112 26.112v130.048h131.072c14.336 0 26.112 11.776 26.112 26.112 0 14.336-11.776 26.112-26.112 26.112z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chuangjiandingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M903.83 771.15V262.49l-162.6-151.75h-68.07l-56.84-53H120.17v820.11h100.22v88.45H903.8V842a17.69 17.69 0 0 0-17.69-17.69A17.69 17.69 0 0 0 868.43 842v17.69h-0.06v71.21H255.76V556.21a17.69 17.69 0 0 0-17.69-17.69 17.69 17.69 0 0 0-17.69 17.69v286.27h-64.84V93.07h446.82l18.94 17.67H220.42v377.39a17.69 17.69 0 0 0 17.69 17.69 17.69 17.69 0 0 0 17.69-17.69v-342h403.4l2.85 2.66 2.49-2.66h62.73l6.13 5.72V270.2H860.23l8.23 7.68v493.27a17.69 17.69 0 0 0 17.69 17.69 17.69 17.69 0 0 0 17.68-17.69zM757 246.65v-72.78l78 72.79z"  ></path>' +
    '' +
    '<path d="M760 601.81a17.7 17.7 0 0 0 0-35.4H386.65a17.7 17.7 0 0 0 0 35.4zM691.27 713.56a17.7 17.7 0 0 0 0-35.4H455.39a17.7 17.7 0 1 0 0 35.4zM691.27 490.06a17.7 17.7 0 0 0 0-35.4H455.39a17.7 17.7 0 0 0 0 35.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghuchaxun" viewBox="0 0 1036 1024">' +
    '' +
    '<path d="M817.451448 737.982904a178.117169 178.117169 0 0 0 31.430393-101.093811c0-98.716547-80.344562-179.057625-179.10639-179.057625-98.76357 0-179.153413 80.34282-179.153412 179.057625 0.104495 98.899413 80.252258 179.050659 179.153412 179.153413 44.391272 0 84.540041-16.834165 115.827624-43.647615l93.352464 71.577421 28.400034-37.024366-89.904125-68.965042z m-147.675997 31.428651c-73.15878-0.07663-132.445832-59.365423-132.522462-132.522462 0.101012-73.130915 59.388064-132.37791 132.522462-132.430158 73.111757 0.07663 132.372686 59.314917 132.473698 132.430158-0.050506 73.150072-59.323625 132.445832-132.473698 132.522462zM489.27231 500.496828v2.237937c-11.98385 16.087025-22.010157 33.574284-29.425828 52.5506-134.856187 23.40865-239.678732 135.040795-250.356392 273.857346H162.860881c9.590911-143.137425 105.625416-265.900043 242.242345-309.669568-61.692182-36.559362-103.516356-103.053095-103.516356-179.945834 0-115.888579 93.946344-209.834924 209.834924-209.834923s209.833182 93.946344 209.833182 209.834923c0 24.667816-4.707505 48.029444-12.589922 69.945555h-50.406707c10.165634-21.261275 16.36742-44.810994 16.36742-69.945555 0-89.994687-73.211028-163.203973-163.252738-163.203973-90.085249 0.102754-163.08032 73.118724-163.158692 163.203973 0 82.444914 61.598136 150.058486 141.057973 160.969519z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)