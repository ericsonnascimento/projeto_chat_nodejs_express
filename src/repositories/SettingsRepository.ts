import { AppDataSource } from "../database/data-source"; // importando nossa classe AppDataSource
import { Setting } from "../entities/Settings"; //importando nossa classe entidade Setting

export const SettingsRepository = AppDataSource.getRepository(Setting);