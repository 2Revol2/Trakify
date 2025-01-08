import { HabitsType } from "../../shared/Types";
import { Button } from "../Button/Button";
import { EditHabitInput } from "../EditHabitInput/EditHabitInput";
import { DaysStreak } from "../DaysStreak/DaysStreak";
import { useNavigate } from "react-router";
import style from "./HabitItem.module.scss";
type Props = {
  habit: HabitsType;
  index: number;
  isEditing: boolean;
  editHabit: HabitsType;
  editHabitHandler: (index: number) => void;
  saveEditHabitHandler: () => void;
  deleteHandler: ({ name, motivation }: HabitsType) => void;
  dayStreak: (habitName: string) => void;
  setEditHabit: (value: HabitsType) => void;
};

export const HabitItem = ({
  habit,
  index,
  isEditing,
  editHabit,
  editHabitHandler,
  saveEditHabitHandler,
  deleteHandler,
  dayStreak,
  setEditHabit,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div key={index} className={style.habitWrapper}>
      <div className={style.habitHeader}>
        <div className={style.habitFlex}>
          <div>
            <p className={style.description}>Привычка</p>
            {isEditing ? (
              <EditHabitInput
                variants="editHabitName"
                value={editHabit.name}
                onChange={(event) =>
                  setEditHabit({
                    ...editHabit,
                    name: event.target.value,
                  })
                }
              />
            ) : (
              <h3 className={style.habitName}>{habit.name}</h3>
            )}
          </div>
          {isEditing ? (
            null
          ) : (
            <Button
              variants="details"
              onClick={() => navigate(`/habit/${habit.name}`)}
            >
              Детали
            </Button>
          )}
        </div>
        <p className={style.description}>Цель</p>
        {isEditing ? (
          <EditHabitInput
            variants="editHabitMotivation"
            value={editHabit.motivation}
            onChange={(event) =>
              setEditHabit({
                ...editHabit,
                motivation: event.target.value,
              })
            }
          />
        ) : (
          <p className={style.habitMotivation}>{habit.motivation}</p>
        )}
      </div>
      <p className={style.description}>
        Дни выполнения (можно отметить только один раз в день)
      </p>
      <DaysStreak>{habit.streak}</DaysStreak>
      <div className={style.habitBtn}>
        {isEditing ? (
          <Button variants="default" onClick={saveEditHabitHandler}>
            Сохранить
          </Button>
        ) : (
          <Button variants="default" onClick={() => dayStreak(habit.name)}>
            Отметить
          </Button>
        )}
        {isEditing ? (
          <Button variants="edit" onClick={() => editHabitHandler(index)}>
            Отмена
          </Button>
        ) : (
          <Button variants="edit" onClick={() => editHabitHandler(index)}>
            Редактировать
          </Button>
        )}
        {isEditing ? null : (
          <Button variants="delete" onClick={() => deleteHandler(habit)}>
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};
