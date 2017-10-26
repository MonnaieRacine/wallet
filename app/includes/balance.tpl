    <!-- Account balance and limits-->
    <div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.limites.id">
      
        @@if (site === 'mew' ) {
        <div>
            <wallet-decrypt-drtv></wallet-decrypt-drtv>
        </div>
        
        <div ng-show="wallet!=null" ng-controller='balanceCtrl'>
     }
     @@if (site === 'readOnly' ) { 
         <div  ng-controller='balanceCtrl'>
     }
     
         <blocked-account-drtv> </blocked-account-drtv>

         <section class="row" >
          <div class="col-md-10 col-xs-10 totBal grp">
                 {{token.balance| number : 2}} {{ 'CUR' | translate }}
                 <button type="button" class="btn btn-primary" style="padding: 2px 10px;" ng-click="refreshBal()" translate="TRA_Refresh">Refresh </button>
          </div>
         </section>
         
         <section class="row" >
          <div class="col-md-12 ">
              <div class="row grp"> 
               
               <div class="col-md-6 col-xs-6">
                 <label translate="TRAN_Address" >Votre adresse :</label>
               </div>
                <div class="col-md-6 col-xs-6">
                
                  <a class="btn btn-primary bellowmargin option_btn" ng-click="openOptions()"  >&nbsp; </a>
                
                  <a type="button" class="btn btn-primary bellowmargin file_btn" href="{{blobEnc}}" download="{{ 'CUR' | translate }}_{{currentWalletAddress}}.dat"  ng-if="!isApp">&nbsp; </a>
                  <a class="btn btn-primary bellowmargin file_btn" ng-click="dowloadAppFile()"  ng-if="isApp">&nbsp; </a>
                  <a class="btn btn-primary bellowmargin qr_btn" ng-click="printQRCode()"  ng-if="!isApp">&nbsp; </a>
                </div>
                
                
               <div  class="col-md-6 col-xs-6">
                  <div class="identiconWrapper">
                    <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{currentWalletAddress}}" watch-var="currentWalletAddress"></div>
                  </div>
               </div>
               <div  class="col-md-6 col-xs-6">
                  <textarea cols="9" rows="5" class="adrtxt" disabled>{{currentWalletAddress}} </textarea>
               </div>
              </div>
          </div>
         </section>
         
         <section class="row" >
	      <div class="col-md-12 ">
	       <div class="row grp"> 
            <div  class="col-md-12"> 
	             <label translate="BAL_balances" >Votre balance :</label>
            </div> 
         @@if (currency_selection !== 'CM' ) {  
            <div  class="col-md-12">  
                <div class="balance-item">{{ 'CUR_nanti' | translate }}:</div>
                <div class="balance-amount text-primary">{{token.balanceEL| number : 2}} {{ 'CUR' | translate }}</div>
            </div> 
         }
         @@if (currency_selection !== 'N' ) {  
            <div  class="col-md-12">  
                    <div class="balance-item">{{ 'CUR_credit_mut' | translate }}:</div>
                    <div class="balance-amount text-primary">{{token.balanceCM| number : 2}} {{ 'CUR' | translate }}</div>
            </div> 
         }
  
           </div>
           
        @@if (currency_selection !== 'N' ) {  
           <div class="row grp">    
             <div class="col-md-12">             
	             <label translate="LIM_limites" >Vos limites de </label>&nbsp;<label translate="CUR_credit_mut" > CM</label><label >:</label>
             </div> 
             <div  class="col-md-12">  
                    <div class="balance-item">{{ 'LIM_credit' | translate }}</div>
                    <div class="balance-amount text-primary">{{token.limitCMp| number : 2}} {{ 'CUR' | translate }}</div>
             </div> 
             <div  class="col-md-12">  
                    <div class="balance-item">{{ 'LIM_debit' | translate }}</div>
                    <div class="balance-amount text-primary">{{token.limitCMm| number : 2}} {{ 'CUR' | translate }}</div>
             </div>
           </div>
        }
          </div>
         </section>
         
         <section class="row" >  
 @@if (delegation === 'true' || allowance === 'true') {  
          <div class="col-md-12 ">
	       <div class="row grp"> 
	       
	         
	       
	       
	       
             <div  class="col-md-12">  
	            <label translate="VIEW_Delegation_Allowance"></label>
	          </div>
	          <div class="col-md-12 ">
	          <div class="row">
	            <div  class="col-md-6 col-xs-6">
 @@if (delegation === 'true' ) {  
                  <a class="btn btn-info btn-block" translate="VIEW_Delegate_btn" ng-click="handleDelegation()"> </a>
 }
                </div>
                <div  class="col-md-6 col-xs-6">
 @@if (allowance === 'true' ) {  
                  <a class="btn btn-info btn-block" translate="VIEW_Allowance_btn" ng-click="handleAllowance()"> </a>
 }
                </div>
              </div>
              </div>
              
              
           </div>
	      </div>    
}   
          <div id="qrcode_print"></div>
       </section>
       
       
       <div class="over_tab" id="delegation_tab"> 
          <div class="col-md-12 ">
         <section class="row" >  
          <div class="col-md-12 ">
	       <div class="row grp"> 
	         <div  class="col-md-12">  
	            <label translate="DELEG_Delegate_Tab_Title"></label>
	            <button type="button" class="btn btn-primary" ng-click="closeDelegation()" style="float:right;" translate="DELEG_CloseTab">Close</button>
	             <!--<button type="button" class="btn btn-primary" style="float:right; margin-right:10px;"   ng-click="refreshDel()" translate="TRA_Refresh">Refresh </button>-->
	   
	          </div>
	          <div  class="col-md-12">  
	          
	          <br/> 
	           <div class="row "> 
	            <div  class="col-md-12"> 
	             <div id="transDelStatus" ></div>
	            </div>
               <div class="col-md-5 col-xs-5">
                 &nbsp;
               </div>
                <div class="col-md-7 col-xs-7">
                  <button type="button" class="btn btn-primary bellowmargin" ng-click="delegateHelp()" translate="DELEG_help">?</button>
                  <button type="button" class="btn btn-primary bellowmargin"  ng-click="addDelegPop()" translate="DELEG_add">Add </button>
                
               </div>
               </div>
	             
	              
	           <div class="row "> 
               <div class="col-md-12 ">
                  <table width="100%" >
                    <tr  ng-show="noDelegation" class="tr_trans">
                         <td >
                           <p translate="DELEG_noDeleg" >no delegation</p>
                         </td>
                    <tr>
	                <tr  ng-repeat="dg in delegations track by $index" class="tr_trans">
	                  
                         <td  width="100px">
                             <div class="identiconWrapper without_text_tr" ng-class="{'with_text_tr': dg.name!=''}">
                                 <div id="addressIdenticon" title="Address Indenticon" img="1" blockie-address="{{dg.address}}"  watch-var="delegations" ></div>
                             </div>
                             <div style="color:black; max-height:21px; overflow:hidden; text-align:center;">{{dg.name}}</div>
                         </td>
                         
                        <td >
                            <textarea cols="9" rows="5" class="adrtxtSml" readonly="readonly" style="overflow:hidden;">{{dg.address}}</textarea>
                        </td>
                       
                        <td >
                            {{dg.amount}} {{ 'CUR' | translate }}
                        </td>
                       <td width="50px;">
                              <a class="btn btn-primary btn-block"  ng-click="editDeleg(dg)"  translate="CTC_edit" >edit</a>
                        </td>
                        <td width="50px;">
                             <a class="btn btn-info btn-block" ng-click="deleteDeleg(dg)"  translate="CTC_delete"> delete </a>
                        </td>
                        
	               </tr>
	                 <tr ng-show="noMoreDelegation" class="tr_trans">
                     <td colspan="5">
                        <p translate="DELEG_NoMore" >Pas Plus</p>
                     </td>
	               </tr>
                 </table>
               </div>
             </div>
	             
	         <div class="row "> 
               <div class="col-md-col-md-6 col-xs-6 ">
                  <a class="btn btn-info btn-block" id="prevDeleg" ng-click="prevDeleg()"  translate="DELEG_prev" > Ajouter </a>
               </div>
               <div class="col-md-col-md-6 col-xs-6 ">
                  <a class="btn btn-info btn-block" id="nextDeleg" ng-click="nextDeleg()"  translate="DELEG_next" > Ajouter </a>
               </div>
             </div>     
	             
	             
	             
	             
	          </div>
	        </div>
	      </div>       
        </section> 
	      </div>        
       </div>
       
      
          <!-- Delegation Help -->
         <div class="modal fade" id="delegation_help_pop" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel" data-backdrop="static" data-keyboard="false">
              <div class="modal-dialog" role="document">
                  <div class="modal-content"> 
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="DELEG_Delegate_Help_title">Delegate:</label></p>
                           <p translate="DELEG_Delegate_Help_text"></p>
                             
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-primary" data-dismiss="modal" translate="DELEG_Close">CLose </button>
                      </div>
                  </div>
              </div>
        </div>  
        
         <!-- add delegation Modal -->
         <div class="modal fade" id="addDelegation" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="DELEG_Add_Deleg">Choose address</label></p>
                           <p translate="DELEG_chooseAddress">Choose address</p>
                           
                           
                            <p>
                            <button type="button" class="btn btn-primary"  ng-click="contactPop()" translate="CTC_pick">ContactPop </button>
                            </p>
                   
                   
                
                           
                           
                           
                           
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon" ng-click="startScanToAddress()" blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                             <p translate="DELEG_set_Limit">Set Limit</p>
                               <input class="form-control" type="text"  placeholder="0.00" ng-model="currDelLimit" style="width:50%;margin-left:25%;" />
                              <p>&nbsp;</p>
                              <p translate="DELEG_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password"  placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="delStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="DELEG_cancel_Deleg">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveNewDeleg()" translate="DELEG_Save_Deleg">Sauver</button>
                      </div>
                  </div>
              </div>
        </div>
        
        
          <!-- edit delegation Modal -->
         <div class="modal fade" id="editDelegation" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="DELEG_Edit_Deleg">Choose address</label></p>
                           <p translate="DELEG_Address"> address</p>
                           
                           
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon"  blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" readonly="readonly" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                             <p translate="DELEG_set_Limit">Set Limit</p>
                               <input class="form-control" type="text"  placeholder="0.00" ng-model="currDelLimit" style="width:50%;margin-left:25%;" id="del_lim_ed_p"/>
                              <p>&nbsp;</p>
                              <p translate="DELEG_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password" placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="delEditStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="DELEG_cancel_Deleg">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveEditDeleg()" translate="DELEG_Save_Deleg">Sauver</button>
                      </div>
                  </div>
              </div>
        </div>
        
         <!-- delete delegation Modal -->
         <div class="modal fade" id="deleteDelegation" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="DELEG_Delete_Deleg">Choose address</label></p>
                           <p translate="DELEG_Address"> address</p>
                           
                           
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon"  blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" readonly="readonly" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                            
                              <p translate="DELEG_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password" placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="delDeleteStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="DELEG_Delete_cancel_Deleg">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveDeleteDeleg()" translate="DELEG_Delete_conf_Deleg">Supprimer</button>
                      </div>
                  </div>
              </div>
        </div>
        
        
        
        
        
         <div class="over_tab" id="allowance_tab"> 
          <div class="col-md-12 ">
         <section class="row" >  
          <div class="col-md-12 ">
	       <div class="row grp"> 
	         <div  class="col-md-12">  
	            <label translate="ALLOW_Allowance_Tab_Title"></label>
	            <button type="button" class="btn btn-primary" ng-click="closeAllowance()" style="float:right;" translate="ALLOW_CloseTab">Close</button>
	             <!--<button type="button" class="btn btn-primary" style="float:right; margin-right:10px;"   ng-click="refreshAllowance()" translate="TRA_Refresh">Refresh </button>-->
	   
	          </div>
	          <div  class="col-md-12">  
	           <br/> 
	          
	           <div class="row "> 
	            <div  class="col-md-12"> 
	             <div id="transAllowStatus" ></div>
	            </div>
               <div class="col-md-5 col-xs-5">
                 &nbsp;
               </div>
                <div class="col-md-7 col-xs-7">
                  <button type="button" class="btn btn-primary bellowmargin" ng-click="allowanceHelp()" translate="ALLOW_help">?</button>
                  <button type="button" class="btn btn-primary bellowmargin"  ng-click="addAllowPop()" translate="ALLOW_add">Add </button>
                
               </div>
               </div>
	             
	              
	          <div class="row "> 
               <div class="col-md-12 ">
                  <table width="100%" >
                    <tr  ng-show="noAllowance" class="tr_trans">
                         <td >
                           <p translate="ALLOW_noAllow" >no delegation</p>
                         </td>
                    <tr>
	                <tr  ng-repeat="al in allowances track by $index" class="tr_trans">
	                  
                         <td  width="100px">
                             <div class="identiconWrapper without_text_tr" ng-class="{'with_text_tr': al.name!=''}">
                                 <div id="addressIdenticon" title="Address Indenticon" img="1" blockie-address="{{al.address}}"  watch-var="allowances" ></div>
                             </div>
                             <div style="color:black; max-height:21px; overflow:hidden; text-align:center;">{{al.name}}</div>
                         </td>
                         
                        <td >
                            <textarea cols="9" rows="5" class="adrtxtSml" readonly="readonly" style="overflow:hidden;">{{al.address}}</textarea>
                        </td>
                       
                        <td >
                            {{al.amount}} {{ 'CUR' | translate }}
                        </td>
                        <td width="50px;">
                             <a class="btn btn-info btn-block" ng-click="deleteAllow(al)"  translate="CTC_delete"> delete </a>
                        </td>
                        
	               </tr>
	                <tr ng-show="noMoreAllowance" class="tr_trans">
                     <td colspan="5">
                        <p translate="Allow_NoMore" >Pas Plus</p>
                     </td>
	               </tr>
                 </table>
               </div>
             </div>
	             
	         <div class="row "> 
               <div class="col-md-col-md-6 col-xs-6 ">
                  <a class="btn btn-info btn-block" id="prevAllow" ng-click="prevAllow()"  translate="DELEG_prev" > Ajouter </a>
               </div>
               <div class="col-md-col-md-6 col-xs-6 ">
                  <a class="btn btn-info btn-block" id="nextAllow" ng-click="nextAllow()"  translate="DELEG_next" > Ajouter </a>
               </div>
             </div>     
	              
	             
	             
	             
	             
	          </div>
	        </div>
	      </div>       
        </section> 
	      </div>        
       </div>
       
      
          <!-- Allowance Help -->
         <div class="modal fade" id="allowance_help_pop" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel" data-backdrop="static" data-keyboard="false">
              <div class="modal-dialog" role="document">
                  <div class="modal-content"> 
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="ALLOW_Allowance_Help_title">Delegate:</label></p>
                           <p translate="ALLOW_Allowance_Help_text"></p>
                             
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-primary" data-dismiss="modal" translate="ALLOW_Close">CLose </button>
                      </div>
                  </div>
              </div>
        </div>  
        
        
         <!-- add allowance Modal -->
         <div class="modal fade" id="addAllowance" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="ALLOW_Add_Allow">Choose address</label></p>
                           <p translate="ALLOW_chooseAddress">Choose address</p>
                           
                           
                            <p>
                            <button type="button" class="btn btn-primary"  ng-click="contactPop()" translate="CTC_pick">ContactPop </button>
                            </p>
                   
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon" ng-click="startScanToAddress()" blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                             <p translate="ALLOW_set_Amount">Set Amount</p>
                               <input class="form-control" type="text"  placeholder="0.00" ng-model="currAllowAmount" style="width:50%;margin-left:25%;" />
                              <p>&nbsp;</p>
                              <p translate="ALLOW_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password" placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="allowStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="ALLOW_cancel_Allowance">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveNewAllow()" translate="ALLOW_Save_Allowance">Sauver</button>
                      </div>
                  </div>
              </div>
        </div>
        
        
        
        
        
        
            <!-- edit allowance Modal -->
         <div class="modal fade" id="editAllowance" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="ALLOW_Edit_Allowance">Choose address</label></p>
                           <p translate="ALLOW_Address"> address</p>
                           
                           
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon"  blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" readonly="readonly" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                             <p translate="ALLOW_set_Amount">Set Limit</p>
                               <input class="form-control" type="text"  placeholder="0.00" ng-model="currAllowAmount" style="width:50%;margin-left:25%;" id="all_amount_p"/>
                              <p>&nbsp;</p>
                              <p translate="ALLOW_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password" placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="allowEditStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="ALLOW_cancel_Allowance">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveEditAllowance()" translate="ALLOW_Save_Allowance">Sauver</button>
                      </div>
                  </div>
              </div>
        </div>
        
         <!-- delete allowance Modal -->
         <div class="modal fade" id="deleteAllowance" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="ALLOW_Delete_Allowance">Choose address</label></p>
                           <p translate="ALLOW_Address"> address</p>
                           
                           
                            <div class="identiconWrapper" style="max-width:100px;">
                                 <div id="addressIdenticon" title="Address Indenticon"  blockie-address="{{curraddress }}"  watch-var="curraddress" ></div>
                             </div>
                             <textarea cols="9" rows="5" readonly="readonly" class="adrtxt" placeholder="{{'ID_placeholder' | translate}}" ng-model="curraddress" ng-change="getCttName()"> </textarea>
                             <div ng-bind-html="selectedName" style="overflow:hidden;text-align:center;max-height:21px"></div>
                             <p>&nbsp;</p>
                            
                              <p translate="ALLOW_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password" placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="allowDeleteStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="ALLOW_Delete_cancel_Allowance">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveDeleteAllowance()" translate="ALLOW_Delete_conf_Allowance">Supprimer</button>
                      </div>
                  </div>
              </div>
        </div>
        
        
      <div class="pop_pane" style="z-index:12;"   ng-click="closeCttPop()" ng-show="showContactPop">
      <div class="ctt_pop" style="z-index:13;" ng-show="showContactPop">
          <div class="ctt_cent">
              <div ng-show="NoCtc" translate="CTC_noContacts"></div>
                  <div  ng-repeat="ct in contacts track by $index" class="ctt_elm">
                      <div>
                          <div  ng-click="pickCtc(ct.address,ct.name,'deleg')">
                              <div class="identiconWrapper" style="max-width:60px;" >
                                  <div id="addressIdenticon" title="Address Indenticon" img="1" blockie-address="{{ct.address }}"  watch-var="contacts" ></div>
                              </div>
                              <div class="ctt_txt">{{ct.name}}&nbsp;</div>
                          </div>
                       </div>
                   </div>
               </div>
           </div>      
       </div>
       
       
       
          <!-- confirm  -->
        <div class="modal fade" id="conf_pop"  style="z-index:400;" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-body">
                          <h4 align="center">
                              
                              <label ng-bind-html="confStatus"</label>
                          
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-primary" data-dismiss="modal" translate="TRAN_OK">Fermer</button>
                          
                      </div>
                  </div>
              </div>
        </div>  
        
        
<!-- option Modal -->
         <div class="modal fade" id="option_pop" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                          <h4 align="center">
                           <p><label translate="OPT_title">Option</label></p>
                           <p translate="OPT_record_password">Password</p>
                           
                          <p><input type="radio" ng-model="delay" value="0">
                            <span translate="OPT_zero"></span>
                          </p>
                           <p><input type="radio" ng-model="delay" value="120">
                            <span translate="OPT_two_min"></span>
                          </p>
                           <p><input type="radio" ng-model="delay" value="300">
                            <span translate="OPT_five_min"></span>
                          </p>
                           <p><input type="radio" ng-model="delay" value="900">
                            <span translate="OPT_15_min"></span>
                          </p>
                           <p><input type="radio" ng-model="delay" value="3600">
                            <span translate="OPT_hour"></span>
                          </p>
                           
                           
                          <p ng-hide="delay==0">&nbsp;</p>
                           
                           <p ng-hide="delay==0"><label translate="OPT_warning"></label></p>
                           
                           
                           
                          <p>&nbsp;</p>
                              <p translate="OPT_Enter_pass">Entrez votre mot de passe</p><br/>
                                 <input class="form-control" type="password"  placeholder="{{ 'DCRY_Placeholder_psw' | translate }}" ng-model="trPass" style="width:50%;margin-left:25%;"/>
                                 <div id="optStatus" ></div></p>
                          </h4>
                      </div>
                      <div class="modal-footer text-center">
                          <button type="button" class="btn btn-default" data-dismiss="modal" translate="DELEG_cancel_Deleg">Annuler </button>
                          <button type="button" class="btn btn-primary" ng-click="saveOption()" translate="DELEG_Save_Deleg">Sauver</button>
                      </div>
                  </div>
              </div>
        </div>
           
        <waiting-drtv></waiting-drtv> 
</div>
<!-- / The Leman -->


</div>
<!-- / The DAO Proposals -->
