<template>
    <div class="reporte">
        <section id="contact-form-section" class="form-content-wrap">
		<div class="container">
			<div class="row">
				<div class="tab-content">
					<div class="col-sm-12">
						<div class="item-wrap">
							<div class="row">
								
								<div class="col-sm-12">
									<div class="item-content colBottomMargin">
										<div class="item-info">
											<h2 class="item-title text-center">Reporte #######</h2>
											
										</div><!--End item-info -->
										
								   </div><!--End item-content -->
								</div><!--End col -->
								<div class="col-md-12">
								
								
								<form id="contactForm" name="contactform" data-toggle="validator" class="popup-form">
												<div class="row">
													<div id="msgContactSubmit" class="hidden"></div>
                          <div class="form-group col-12">
													<select class="form-control">
                            <option>Company select</option>
                          </select>
                          </div>
													<div class="form-group col-sm-6">
														<div class="help-block with-errors"></div>
														<input name="fname" id="motivo" placeholder="Motivo*" class="form-control" type="text" required data-error="Por favor ingrese motivo"> 
														<div class="input-group-icon"><i class="fa fa-user"></i></div>
													</div><!-- end form-group -->
													<div class="form-group col-sm-6">
														<div class="help-block with-errors"></div>
														<input name="ordenTrabajo" id="orden_Trabajo" placeholder="Orden Trabajo" class="form-control" type="text" required data-error="Por favor ingresa informacion valida">
														<div class="input-group-icon"><i class="fa fa-envelope"></i></div>
													</div><!-- end form-group -->
													<div class="form-group col-sm-6">
														<div class="help-block with-errors"></div>
														<input name="phone" id="phone" placeholder="Teléfono*" class="form-control" type="text" required data-error="Por favor ingresa tu número de teléfono">
														<div class="input-group-icon"><i class="fa fa-phone"></i></div> 
													</div><!-- end form-group -->
                          <button class="btn btn-default">+
                          </button><!--boton agregar-->
													<div class="form-group col-sm-6">
														<div class="help-block with-errors"></div>
														<input name="subject" id="subject" placeholder="Asunto*" class="form-control" type="text" required data-error="Por favor ingresa el asunto">
														<div class="input-group-icon"><i class="fa fa-book"></i></div> 
													</div><!-- end form-group -->
                          <div class="form-group col-sm-6">
														<div class="help-block with-errors"></div>
														<input name="subject" id="subject" placeholder="Asunto*" class="form-control" type="text" required data-error="Por favor ingresa el asunto">
														<div class="input-group-icon"><i class="fa fa-book"></i></div> 
													</div><!-- end form-group -->
													<div class="form-group col-sm-12">
														<div class="help-block with-errors"></div>
														<textarea rows="3" name="message" id="observaciones" placeholder="Observaciones" class="form-control" required data-error="Por favor ingresa un mensaje"></textarea>
														<div class="textarea input-group-icon"><i class="fa fa-pencil"></i></div>
													</div><!-- end form-group -->
													
													<div class="form-group last col-sm-12">
														<button type="submit" id="submit" class="btn btn-primary"><i class='fa fa-envelope'></i> Enviar</button>
													</div><!-- end form-group -->	
											
													<span class="sub-text">* Campos requeridos</span>
													<div class="clearfix"></div>
												</div><!-- end row -->
											</form><!-- end form -->
											
								
								</div>
							</div><!--End row -->
							
						
								
							
							<!-- Popup end -->
							
						</div><!-- end item-wrap -->
					</div><!--End col -->
				</div><!--End tab-content -->
			</div><!--End row -->
		</div><!--End container -->
	</section>
    </div>
</template>

<script>
    export default {
        name:"reporte"
    }
</script>

<style lang="scss" scoped>

</style>