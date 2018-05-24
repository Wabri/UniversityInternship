package ch.bestvision.serv.user.controller.rest;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.bestvision.serv.user.controller.DataController;
import ch.bestvision.serv.user.model.DataBean;
import ch.bestvision.serv.user.model.dto.DataBeanDTO;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class DataRestController {
	private static final Logger log = LoggerFactory.getLogger(DataRestController.class);

	@Autowired
	private DataController userController;

	public DataRestController() {
	}

	@ApiOperation(value = "Get Data by Id", nickname = "getDataById", httpMethod = "GET", produces = "application/json")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success", response = DataBeanDTO.class),
	@ApiResponse(code = 401, message = "Unauthorized"), 
	@ApiResponse(code = 403, message = "Forbidden"),
	@ApiResponse(code = 404, message = "Not Found"), 
	@ApiResponse(code = 500, message = "Failure") })
	@GetMapping("/v1/api/dataById")
	public ResponseEntity<DataBeanDTO> getData(@ApiParam("id") @RequestParam(required = true, name = "id") Integer id) throws Exception {
		log.info("Get data for id:" + id);
		ModelMapper modelMapper = new ModelMapper();
		try {
			DataBean data = userController.getData(id);
			DataBeanDTO userBeanDto = modelMapper.map(data, DataBeanDTO.class);
			return ResponseEntity.ok(userBeanDto);
		} catch (Exception sse) {
			return ResponseEntity.notFound().build();
		}
	}	
}
