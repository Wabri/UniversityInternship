package ch.bestvision.serv.user.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import ch.bestvision.serv.user.model.DataBean;
import ch.bestvision.serv.user.service.DataService;


/**
 * Valutare se utilizzare appositi DTO per lo scambio dati da/verso l'esterno al posto di DataBean ad esempio
 * @author Tama
 *
 */

@Controller
public class DataControllerImpl implements DataController {
	private static final Logger log = LoggerFactory.getLogger(DataControllerImpl.class);

	@Autowired
	private DataService userService;

	public DataControllerImpl() {
		log.info("DataControllerImpl");
	}

	/* (non-Javadoc)
	 * @see ch.bestvision.serv.user.controller.DataController#getData(java.lang.Integer)
	 */
	@Override
	public DataBean getData(Integer id) {
		return userService.getData(id);
	}

	
	

}
