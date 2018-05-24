package ch.bestvision.serv.user.controller.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import ch.bestvision.serv.user.controller.DataController;
import ch.bestvision.serv.user.model.DataBean;
import ch.bestvision.serv.user.model.dto.DataBeanDTO;

@WebService
public class DataSoapController {
	private static final Logger log = LoggerFactory.getLogger(DataSoapController.class);
	
	private DataController userController;
	
	@Autowired
	public DataSoapController(DataController userController) {
		this.userController = userController;
	}

	@WebMethod
	public DataBeanDTO getUserById(@WebParam(name = "id") Integer id) throws Exception {
		log.info("Get data id:" + id);
		
		
		ModelMapper mapper = new ModelMapper();
		
		DataBean user = userController.getData(id);
		
		DataBeanDTO userDto = mapper.map(user, DataBeanDTO.class);
		
		return userDto;
	}
}
