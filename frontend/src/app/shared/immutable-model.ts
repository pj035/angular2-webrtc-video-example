import { Map } from "immutable";

/**
 * Base class for immutable model classes. Instances of immutable models can not be changed.
 * Changing the value of a property results in the creation of a new model instance based on the
 * previous instance with the single value change applied. The initial model instance remains
 * unchanged.
 *
 * @export
 * @abstract
 * @class ImmutableModel
 * @template TDocument The interface describing the data structure of the model.
 * @template TModel The class that inherits from ImmutableModel
 * @example
 * interface IPerson {
 *   name: string;
 *   age: number;
 * }
 *
 * class Person extends ImmutableModel<IPerson, Person> {
 *   constructor(data: IPerson|Map<string, any>) {
 *     super(Person, data);
 *   }
 *
 *   get name(): string {
 *     return this.data.get("name");
 *   }
 *
 *   setName(name: string): Person {
 *     return this.setValue("name", name);
 *   }
 *
 *   get age(): number {
 *     return this.data.get("age");
 *   }
 *
 *   setAge(age: number): Person {
 *     return this.setValue("age", age);
 *   }
 * }
 */
export abstract class ImmutableModel<TDocument, TModel extends ImmutableModel<TDocument, TModel>> {
    protected data: Map<string, any>;

    constructor(
        private ctor: new(data: TDocument|Map<string, any>) => TModel,
        data_: TDocument|Map<string, any>
    ) {
        this.data = Map<string, any>(data_);
    }

    toJS(): any {
        return this.data.toJS();
    }

    protected setValue(key: string, value: any): TModel {
        return new this.ctor(this.data.set(key, value));
    }
}
