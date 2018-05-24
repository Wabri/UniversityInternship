package ch.bestvision.serv.user.repository;

import java.util.UUID;

import org.springframework.stereotype.Repository;

import ch.bestvision.serv.user.model.DataBean;

@Repository
public class DataRepositoryImpl implements DataRepository {

	public DataRepositoryImpl() {
	}

	@Override
	public DataBean getData(Integer id) {
		DataBean dataBean = new DataBean();
		dataBean.setId(id);
		dataBean.setData(UUID.randomUUID().toString());
		dataBean.setDescription("Description random "+UUID.randomUUID().toString() );
		return dataBean;
	}

}
