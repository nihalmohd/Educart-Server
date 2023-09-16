"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIMP = void 0;
const PaymentIMP = (PaymentModel) => {
    const create = (_id, courseId, coursePrice) => __awaiter(void 0, void 0, void 0, function* () {
        const CreatedPayment = yield PaymentModel.create({ _id: _id, courseId: courseId, coursePrice: coursePrice });
        return CreatedPayment;
    });
    const FindAllpaymnents = () => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedPayments = yield PaymentModel.find();
        return FoundedPayments;
    });
    return {
        create,
        FindAllpaymnents
    };
};
exports.PaymentIMP = PaymentIMP;
